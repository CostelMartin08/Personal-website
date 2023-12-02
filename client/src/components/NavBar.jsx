import React, { useEffect, useState } from "react";
import './nav.css';


const NavBar = (props) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isChecked, setIsChecked] = useState(false);

    let index = props.currentIndex;
    let text = ['0', 'About Me', 'Courses', 'My Project', 'Contact'];

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



    let style;
    let styleNav;
    let color = 'first-way';
    let colorDrop = 'second-way';
    let bgColorDrop = "bg-last-way"
    switch (index) {
        case 0:
            style = windowWidth < 576 ? 'bg-first-way' : 'bg-second-way';
            styleNav = 'bg-last-way';
            color = 'second-way';
            break;
        case 2:
            style = 'bg-second-way';
            styleNav = 'bg-last-way';
            color = 'second-way';
            break;
        case 5:
            style = 'bg-second-way';
            styleNav = "bg-first-way";
            color = 'second-way';
            bgColorDrop = "bg-first-way"
            break;
        default:
            style = 'bg-first-way';
            styleNav = 'bg-last-way';
    }


    return (

        <nav className="navbar w-100">

            <div className="container-fluid px-md-5 py-2 position-relative">

                <button className={`bg-transparent border-0 navbar-brand ${props.currentIndex === 2 || props.currentIndex === 5 ? 'second-way' : 'first-way'} font`} onClick={() => scrollToComponent(0)}>MC</button>

                <div className="d-md-flex d-none menu-ul">
                    {
                        [1, 2, 3, 4].map((index) => (
                            <ul key={index} onClick={() => scrollToComponent(index)}>
                                <li className={color}>
                                    {text[index]}
                                </li>
                            </ul>
                        ))
                    }

                </div>

                <button className="bg-transparent border-0 d-md-none" type='button'>

                    <label className="burger" htmlFor="burger">
                        <input
                            type="checkbox"
                            id="burger"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            className="size-settings"
                        />
                        <span className={style}></span>
                        <span className={style}></span>
                        <span className={style}></span>
                    </label>

                </button>

                <div className="set-collapse" id="navbars">
                    <div
                        className={`${styleNav} dropdown-menu position-static gap-2 p-4 rounded-3 mx-0 shadow w-220px`}
                        style={{ display: isChecked ? 'grid' : 'none' }}>

                        {
                            [1, 2, 3, 4].map((index) => (
                                <ul className="list main-font" key={index} onClick={() => scrollToComponent(index)}>
                                    <li className='my-auto'>
                                        <button className="btn-style">
                                            <p className={`${colorDrop} a-btn-style m-0`}>{text[index]}</p>
                                        </button>
                                    </li>
                                </ul>
                            ))
                        }

                        <hr className={`${colorDrop} line-nav`} />

                        <ul className="social-list">

                            <li><a href='https://www.linkedin.com/in/constantin-martinescu-b5a58526b/' className="second-way pe-2"><i className={`${colorDrop} fa-brands fa-linkedin fa-2xl`}></i></a></li>
                            <li><a href='https://github.com/CostelMartin08?tab=repositories' className="second-way px-2"><i className={`${colorDrop} fa-brands fa-square-github fa-2xl`}></i></a></li>
                            <li><a href='https://twitter.com/MartinescuCost2' className="second-way px-2"><i className={`${colorDrop} fa-brands fa-square-x-twitter fa-2xl`}></i></a></li>
                            <li><a href='https://www.instagram.com/costelmartinescu/' className="second-way ps-2"><i className={`${colorDrop} fa-brands fa-instagram fa-2xl`}></i></a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </nav>

    )
}

export default NavBar;