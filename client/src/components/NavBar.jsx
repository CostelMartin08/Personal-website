import React, { useEffect, useState } from "react";
import { logEventView } from "../analytics";
import Button from "./MCButton";


const NavBar = (props) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isChecked, setIsChecked] = useState(false);

    let index = props.currentIndex;
    let text = ['0', 'About Me', 'Courses', 'My Project', 'Power Skills', 'Contact'];

    const scrollToComponent = (index) => {

        props.componentRefs[index].current.scrollIntoView({ behavior: "smooth" });
        setIsChecked(false);
    };

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    useEffect(() => {

        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", updateWindowWidth);

        return () => {
            window.removeEventListener("resize", updateWindowWidth);
        };
    }, []);

    useEffect(() => {

        if (isChecked || windowWidth > 768) {

            setIsChecked(false);
        }
    }, [windowWidth])


    let style;
    let styleNav;
    let color = 'text-color-principal';
    let colorDrop = 'text-white';
    let bgColorDrop = "bg-color-secondary"
    switch (index) {
        case 0:
            style = windowWidth < 768 ? 'bg-color-principal' : 'bg-white';
            styleNav = 'bg-color-secondary';
            color = 'text-white';
            break;
        case 2:
            style = 'bg-white';
            styleNav = 'bg-color-secondary';
            color = 'text-white';
            break;
        case 6:
            style = 'bg-white';
            styleNav = "bg-color-principal";
            color = 'text-white';
            bgColorDrop = "bg-color-principal"
            break;
        default:
            style = 'bg-color-principal';
            styleNav = 'bg-color-secondary';
    }


    return (

        <section className="container mx-auto px-4 py-3 fixed left-0 right-0 z-10">


            <div className="relative flex justify-between">

                <Button indx={index} />

                <label className="flex flex-col gap-2 w-8 cursor-pointer">
                    <input
                        className="peer hidden"
                        type="checkbox"
                        id="burger"
                        checked={isChecked}
                        onClick={()=> logEventView('Click Burger Button')}
                        onChange={handleCheckboxChange} />
                    <div
                        className={`rounded-2xl h-[3px] w-1/2 ${style} duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]`}
                    ></div>
                    <div
                        className={`rounded-2xl h-[3px] w-full ${style}  duration-500 peer-checked:-rotate-45`}
                    ></div>
                    <div
                        className={`rounded-2xl h-[3px] w-1/2 ${style} duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]`}
                    ></div>
                </label>


                <div className='w-80 absolute top-12 right-0' id="navbars">
                    <div
                        className={`${bgColorDrop} p-5 gap-4 rounded-md`}
                        style={{ display: isChecked ? 'grid' : 'none' }}>

                        {
                            [1, 2, 3, 4, 5].map((index) => (
                                <ul className="list lato-bold" key={index} onClick={() => scrollToComponent(index)}>
                                    <li className='my-auto'>
                                        <button className="btn-style">
                                            <p className={`${colorDrop} a-btn-style m-0`}>{text[index]}</p>
                                        </button>
                                    </li>
                                </ul>
                            ))
                        }

                        <hr className={`${colorDrop} line-nav`} />

                        <ul className="flex">

                            <li><a href='https://www.linkedin.com/in/constantin-martinescu-b5a58526b/' className="text-white pe-2"><i className={`${colorDrop} fa-brands fa-linkedin fa-2xl`}></i></a></li>
                            <li><a href='https://github.com/CostelMartin08?tab=repositories' className="text-white px-2"><i className={`${colorDrop} fa-brands fa-square-github fa-2xl`}></i></a></li>
                            <li><a href='https://twitter.com/MartinescuCost2' className="text-white px-2"><i className={`${colorDrop} fa-brands fa-square-x-twitter fa-2xl`}></i></a></li>
                            <li><a href='https://www.instagram.com/costelmartinescu/' className="text-white ps-2"><i className={`${colorDrop} fa-brands fa-instagram fa-2xl`}></i></a></li>
                        </ul>

                    </div>
                </div>

            </div>

        </section>

    )
}

export default NavBar;