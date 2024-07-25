import React, { forwardRef } from "react";
import data from '../assets/mock';

import Carousel from "../sections/CarouselCourses";

import './courses.css';

const Courses = forwardRef((props, ref) => {

    const courseData = data.courseData;
    const pairs = [];


    for (let i = 0; i < courseData.length; i += 2) {
        const pair = courseData.slice(i, i + 2);
        pairs.push(pair);
    }


    return (

        <section name='Courses Page' data-page-name="/courses" className="courses-page " id='2' ref={ref}>

            <div className="crs-pg space-y-1 container relative">

                <h3 className="text-white text-center text-4xl md:text-5xl md:py-3 lato-black">Courses</h3>

                <Carousel />

            </div>

        </section>
    )
})

export default Courses;