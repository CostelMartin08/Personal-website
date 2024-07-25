import React, { useState } from "react";
import CoursesCard from "../components/CoursesCard";
import data from "../assets/mock";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel = () => {

    const courseData = data.courseData;

    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        customPaging: (i) => (

            <div>
                <i className="text-white text-[10px] fa-solid fa-circle"></i>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <Slider {...settings}>

            {courseData.map((course, index) => (

                <div className='py-3 px-2 sm:px-0' key={index}>

                    <CoursesCard
                        school={course.school}
                        course={course.titleCourse}
                        date={course.date}
                        description={course.description}
                        teckStack={course.teckStack}
                        logo={course.logo}
                    />

                </div>

            ))}

        </Slider>

    )
}

export default Carousel;