import React from "react";
import CoursesCard from "../components/CoursesCard";
import data from "../assets/mock";


import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';


const Carousel = () => {

    const courseData = data.courseData;

    return (

        <Swiper
            lazy={true}
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{

                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },

                1280: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                1536: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                },

            }}
        >

            {courseData.map((course, index) => (

                <SwiperSlide className='pb-12 pt-3 px-4' key={index}>

                    <CoursesCard
                        school={course.school}
                        course={course.titleCourse}
                        date={course.date}
                        description={course.description}
                        teckStack={course.teckStack}
                        logo={course.logo}
                    />

                </SwiperSlide>

            ))}

        </Swiper>

    )
}

export default Carousel;