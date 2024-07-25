import React, { forwardRef } from "react";
import CarouselProject from "../sections/CarouselProjects";
import data from '../assets/mock';
import './projects.css';



const Projects = forwardRef((props, ref) => {

    const projectData = data.projectData;
    const pairs = [];

    for (let i = 0; i < projectData.length; i += 2) {
        const pair = projectData.slice(i, i + 2);
        pairs.push(pair);
    }

    return (

        <section name='Projects Page' data-page-name="/projects" className="project-page gradient" id='3' ref={ref}>

            <section className="prj-pg">

                <div className="container flex flex-col justify-center items-center h-dvh">

                    <h3 className="text-2xl md:text-4xl font-bold mb-4">Projects</h3>

                    <div className="w-full  xl:w-3/4">

                        <CarouselProject />


                    </div>




                </div>

            </section>
        </section >
    )
})

export default Projects;