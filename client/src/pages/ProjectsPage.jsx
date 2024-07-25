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

                <div className="container mx-auto flex flex-col justify-center items-center h-dvh">

                    <h3 className="text-4xl md:text-5xl md:py-3 lato-black">Projects</h3>

                    <div className="w-full xl:w-11/12 2xl:w-3/4">

                        <CarouselProject />

                    </div>

                </div>

            </section>

        </section >
    )
})

export default Projects;