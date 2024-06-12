import React, { forwardRef } from "react";
import CoursesCard from "../components/CoursesCard";
import data from '../assets/mock';
import './courses.css';


const Courses = forwardRef((props, ref) => {

    const courseData = data.courseData;
    const pairs = [];


    for (let i = 0; i < courseData.length; i += 2) {
        const pair = courseData.slice(i, i + 2);
        pairs.push(pair);
    }


    return (

        <section className="courses-page" id='2' ref={ref}>

            <div className="crs-pg d-grid justify-content-center align-content-center">

                <div className="second-way main-font ">
                    <h3 className="h2 title-page font-size-courses">Courses</h3>
                </div>

                <div className="d-flex d-md-none">

                    <div className="carousel slide" id="myCarousel" data-bs-ride="carousel">

                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>

                        <div className="carousel-inner">

                            {courseData.map((data, index) => (
                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                    <CoursesCard
                                        school={data.school}
                                        course={data.titleCourse}
                                        date={data.date}
                                        description={data.description}
                                        teckStack={data.teckStack}
                                    />
                                </div>
                            ))}

                        </div>

                        <button className="crsl-btn-md carousel-control-prev carousel-set-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                            <span className="d-none d-sm-block carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button className="crsl-btn-md carousel-control-next carousel-set-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                            <span className="d-none d-sm-block carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>

                    </div>

                </div>

                <div className="d-md-flex d-none d-xl-none">

                    <div className="carousel slide" id="myCarousel-md" data-bs-ride="carousel">

                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#myCarousel-md" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
                            <button type="button" data-bs-target="#myCarousel-md" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                        </div>

                        <div className="carousel-inner crs">

                            {pairs?.map((pair, index) => (
                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>

                                    <div className="row adjst">
                                        {pair.map((data, dataIndex) => (

                                            <div className="col" key={dataIndex}>

                                                <CoursesCard
                                                    school={data.school}
                                                    course={data.titleCourse}
                                                    date={data.date}
                                                    description={data.description}
                                                    teckStack={data.teckStack}
                                                />
                                            </div>
                                        ))}

                                    </div>

                                </div>
                            ))}

                        </div>

                        <button className="crsl-btn-md carousel-control-prev carousel-set-prev" type="button" data-bs-target="#myCarousel-md" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button className="crsl-btn-md carousel-control-next carousel-set-next" type="button" data-bs-target="#myCarousel-md" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>

                    </div>

                </div>

                <div className="d-none d-xl-flex">
                    <div className="container">

                        <div className="row">

                            {courseData.map((data, index) => (

                                <div className='col' key={index}>
                                    <CoursesCard
                                        school={data.school}
                                        course={data.titleCourse}
                                        date={data.date}
                                        description={data.description}
                                        teckStack={data.teckStack}
                                    />
                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
})

export default Courses;