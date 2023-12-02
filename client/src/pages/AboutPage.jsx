import React, { forwardRef } from "react";
import './main.css';

const AboutPage = forwardRef((props, ref) => {

    return (

        <section className="about-page " id='1' ref={ref}>

            <div className="container position-relative about-page-h w-75 d-flex flex-column justify-content-center p-0">

                <div className="svg-set1">
                    <svg viewBox="30 -205 80 80" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                        <line x1="10" y1="10" x2="10" y2="50" stroke="#0C3B2E" stroke-width="2" />
                        <line x1="10" y1="50" x2="50" y2="50" stroke="#0C3B2E" stroke-width="2" />
                    </svg>
                    <svg viewBox="-50 165 80 80" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                        <line x1="10" y1="10" x2="50" y2="10" stroke="#0C3B2E" stroke-width="2" />
                        <line x1="50" y1="10" x2="50" y2="50" stroke="#0C3B2E" stroke-width="2" />
                    </svg>
                </div>


                <div className="mt-4 main-font">

                    <h3 className="font-size first-way mb-3 ">About me</h3>


                    <p className="about-font">
                        Ready for a new step in my career, I am in search of a job opportunity.
                        My passion for technology and the desire to stay up-to-date with innovations
                        have led me to the field of web technologies. At the moment, my focus is on
                        technologies such as HTML, CSS, JavaScript, React and MERN Stack.
                    </p>
                    <div className="d-flex  justify-content-end pt-md-4">

                        <a href="https://github.com/CostelMartin08/Personal-website/raw/main/client/src/assets/resume.pdf" download>

                            <button type="button" className="btn btn-warning">Resume <i className="fa-solid fa-file-arrow-down"></i></button>
                        </a>
                    </div>
                </div>

            </div>

        </section>
    )
})


export default AboutPage;