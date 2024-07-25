import React from "react";
import ProjectsCard from "../components/ProjectsCard";
import data from "../assets/mock";


import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

const CarouselProject = () => {
    const projectsData = data.projectData;



    return (
        <Swiper
            grabCursor={true}
            modules={[ Pagination,  EffectCreative]}
            slidesPerView={1}
            pagination={{  clickable: true, dynamicMainBullets: 1 }}
            effect="creative"
            creativeEffect={{
                prev: {
                  
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ['100%', 0, 0],
                },
              }}
            
        >
            {projectsData.map((project, index) => (
                <SwiperSlide className='pb-5 p-3 sm:p-4 md:px-2' key={index}>
                    <ProjectsCard
                        type={project.type}
                        name={project.name}
                        description={project.description}
                        code={project.code}
                        visit={project.visit}
                        logo={project.logo}
                        image={project.image}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default CarouselProject;
