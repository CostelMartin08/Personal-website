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

        <section className="courses-page " id='2' ref={ref}>

            <div className="crs-pg space-y-1 container relative">

                <div className="text-white">

                    <h3 className="text-2xl md:text-4xl font-bold">Courses</h3>

                </div>
      
                <Carousel/>

            </div>

        </section>
    )
})

export default Courses;