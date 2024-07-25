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

            <div className="container mx-auto flex flex-col items-start justify-center gap-3 footer-h">



                <div className="flex flex-col md:gap-5 md:flex-row justify-between px-4 w-full">

                    <div className="flex flex-col justify-evenly py-3 border-b-2 md:border-b-0">

                        <p className="lato-bold text-3xl">SAY HELLO</p>

                        <a className="" href="mailto:costelmartinescu2000@gmail.com">costelmartinescu2000@gmail.com</a>
                        <a className="" href="mailto:costelmartinescu2002@gmail.com">costelmartinescu2002@gmail.com</a>
                   
                    </div>

                    <div className="md:w-96 nav-footer lato-bold py-5 border-b-2 md:border-b-0">

                        {
                            [1, 2, 3, 4, 0].map((index) => (
                                <div className="click-div" key={index} onClick={() => scrollToComponent(index)}>

                                    <button className="btn-style"> <p className="a-btn-style">{text[index]}</p></button>

                                </div>
                            ))
                        }

                    </div>

                </div>

                <div className="hidden md:block w-full px-4 mb-3 mb-md-5 md:border-t-2">
                    
                </div>

                <div className="px-4">
                    <div className="">
                        <p className="lato-bold">© Martinescu Constantin {year}</p>

                    </div>
                    <div className="mt-3 mt-md-0">
                        <a href='https://www.linkedin.com/in/constantin-martinescu-b5a58526b/' className="text-white pe-2"><i className="fa-brands fa-linkedin fa-2xl"></i></a>
                        <a href='https://github.com/CostelMartin08?tab=repositories' className="text-white px-2"><i className="fa-brands fa-square-github fa-2xl"></i></a>
                        <a href='https://twitter.com/MartinescuCost2' className="text-white px-2"><i className="fa-brands fa-square-x-twitter fa-2xl"></i></a>
                        <a href='https://www.instagram.com/costelmartinescu/' className="text-white ps-2"><i className="fa-brands fa-instagram fa-2xl"></i></a>
                    </div>
                </div>

            </div>

        </footer>
    )
})

export default Footer;