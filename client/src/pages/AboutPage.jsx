import React, { forwardRef } from "react";
import { logEventView } from "../analytics";
import './main.css';

const AboutPage = forwardRef((props, ref) => {

    return (

        <section name='About Page' data-page-name="/about" className="about-page" id='1' ref={ref}>

            <div className="container mx-auto relative about-page-h w-4/5 flex flex-col justify-center p-0">

                <div className="svg-set1">
                    <svg viewBox="30 -205 80 80" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                        <line x1="10" y1="10" x2="10" y2="50" stroke="#2c2c2c" strokeWidth="2" />
                        <line x1="10" y1="50" x2="50" y2="50" stroke="#2c2c2c" strokeWidth="2" />
                    </svg>
                    <svg viewBox="-50 165 80 80" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                        <line x1="10" y1="10" x2="50" y2="10" stroke="#2c2c2c" strokeWidth="2" />
                        <line x1="50" y1="10" x2="50" y2="50" stroke="#2c2c2c" strokeWidth="2" />
                    </svg>
                </div>

                <div className="mt-4 space-y-8 ">

                    <h3 className="lato-bold text-3xl sm:text-5xl md:text-5xl text-color-principal mb-3 ">About me</h3>

                    <p className="indent-2 text-xl md:text-3xl lg:text-4xl tracking-wide">
                        Ready for a new step in my career, I am in search of a job opportunity.
                        My passion for technology and the desire to stay up-to-date with innovations
                        have led me to the field of web technologies. At the moment, my focus is on
                        technologies such as HTML, CSS, JavaScript, React and MERN Stack.
                    </p>

                    <div className="flex justify-end md:pt-4">

                        <a href="https://github.com/CostelMartin08/Personal-website/raw/main/client/src/assets/resume.pdf" download>

                            <button onClick = {()=> logEventView('Download CV')} type="button" className="bg-teal-950 text-white p-3 lato-black px-4 rounded-xl">Resume <i className="fa-solid px-2 fa-file-arrow-down"></i></button>
                        </a>
                    </div>
                </div>

            </div>

        </section>
    )
})


export default AboutPage;