import React, { forwardRef, useEffect, useState } from "react"
import './style.css';


const Footer = forwardRef((props, ref) => {

    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    const scrollToComponent = (index) => {
        props.componentRefs[index].current.scrollIntoView({ behavior: "smooth" });
    };

    const text = ['Home', 'About Me', 'Courses', 'My Project', 'Contact'];

    {/**/ }

    return (
        <footer name='Footer' data-page-name="/footer" className="footer-page" id='6' ref={ref}>

            <div className="px-5 container mx-auto flex flex-col items-start justify-center gap-3 footer-h">

                <div className="flex flex-col gap-8 md:gap-0 md:px-5 md:flex-row justify-between px-4 w-full">

                    <div className="flex flex-col justify-evenly py-2 border-b-2 md:border-b-0">

                        <p className="lato-bold text-2xl md:text-5xl">SAY HELLO</p>

                        <a className="text-lg" href="mailto:costelmartinescu2000@gmail.com">costelmartinescu2000@gmail.com</a>

                    </div>


                    <div className="lato-bold text-lg">

                        {
                            [0, 1, 2, 3, 4].map((index) => (
                                <div className="" key={index} onClick={() => scrollToComponent(index)}>

                                    <button name='scrollToComponent'> <p className="">{text[index]}</p></button>

                                </div>
                            ))
                        }

                    </div>


                    <div className="flex flex-col justify-end">

                        <button name='navigate up' className="lato-black text-xl" onClick={() => scrollToComponent(0)}><i className="fa-solid fa-arrow-up fa-lg"></i></button>

                    </div>


                </div>

                <div className="hidden md:block w-full px-4 mb-3 mb-md-5 md:border-t-2">

                </div>

                <div className="p-4">
                    <div className="">
                        <p className="lato-bold">© Martinescu Constantin {year}</p>

                    </div>
                    <div className="mt-3 mt-md-0">
                        <a name='linkedIn' href='https://www.linkedin.com/in/constantin-martinescu-b5a58526b/' className="text-white pe-2"><i className="fa-brands fa-linkedin fa-2xl"></i></a>
                        <a name='gitHub' href='https://github.com/CostelMartin08?tab=repositories' className="text-white px-2"><i className="fa-brands fa-square-github fa-2xl"></i></a>
                        <a name='twiter' href='https://twitter.com/MartinescuCost2' className="text-white px-2"><i className="fa-brands fa-square-x-twitter fa-2xl"></i></a>
                        <a name='instagram' href='https://www.instagram.com/costelmartinescu/' className="text-white ps-2"><i className="fa-brands fa-instagram fa-2xl"></i></a>
                    </div>
                </div>

            </div>

        </footer>
    )
})

export default Footer;