import React, { forwardRef, useEffect, useState } from "react"
import './nav.css';




const Footer = forwardRef((props, ref) => {



    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    const scrollToComponent = (index) => {
        props.componentRefs[index].current.scrollIntoView({ behavior: "smooth" });
    };

    const text = [<i className="fa-solid fa-arrow-up fa-lg"></i>, 'About Me', 'Courses', 'My Project', 'Contact'];



    return (
        <footer name='Footer' data-page-name="/footer" className="footer-page" id='5' ref={ref}>

            <div className="container d-flex flex-column align-items-center justify-content-center px-md-5 footer-h">



                <div className="row px-4 w-100">

                    <div className="col main-font">

                        <p className="h3 mb-3">SAY HELLO</p>
                        <a className="h6" href="mailto:costelmartinescu2000@gmail.com">costelmartinescu2000@gmail.com</a>

                    </div>

                    <div className="col-md-6 mt-2  mt-md-0 nav-footer main-font">

                        {
                            [1, 2, 3, 4, 0].map((index) => (
                                <div className="click-div" key={index} onClick={() => scrollToComponent(index)}>

                                    <button className="btn-style fs-6"> <p className="a-btn-style">{text[index]}</p></button>

                                </div>
                            ))
                        }

                    </div>

                </div>

                <div className="w-100 px-4 mb-3 mb-md-5">
                    <hr className="border-1" />
                </div>

                <div className="row px-4 w-100 main-font">
                    <div className="col-md-5">
                        <p className="fs-6 m-0">© Martinescu Constantin {year}</p>

                    </div>
                    <div className="col-md-7 mt-3  mt-md-0 text-md-end">
                        <a href='https://www.linkedin.com/in/constantin-martinescu-b5a58526b/' className="second-way pe-2"><i className="fa-brands fa-linkedin fa-2xl"></i></a>
                        <a href='https://github.com/CostelMartin08?tab=repositories' className="second-way px-2"><i className="fa-brands fa-square-github fa-2xl"></i></a>
                        <a href='https://twitter.com/MartinescuCost2' className="second-way px-2"><i className="fa-brands fa-square-x-twitter fa-2xl"></i></a>
                        <a href='https://www.instagram.com/costelmartinescu/' className="second-way ps-2"><i className="fa-brands fa-instagram fa-2xl"></i></a>
                    </div>
                </div>

            </div>

        </footer>
    )
})

export default Footer;