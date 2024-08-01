import React from "react";

const Nav = (props) => {

    const scrollToComponent = (index) => {
        props.componentRefs[index].current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <> {props.currentIndex === 6 ?

            null

            :

            <ul
                className="hidden md:block z-10 absolute bottom-4 right-10 lg:bottom-10 lg:right-18"
            >
                {
                    [0, 1, 2, 3, 4, 5].map((index) => (
                        <li key={index} onClick={() => scrollToComponent(index)}>
                            <button
                                className={
                                    (props.currentIndex === 0 || props.currentIndex === 2 || props.currentIndex === 3) ?
                                        'text-white' :
                                        'text-color-principal'
                                }
                            >

                                {props.currentIndex === index ? (
                                    <i className="fa-solid fa-square fa-xs"></i>
                                ) : (
                                    <i className="fa-regular fa-square fa-xs"></i>
                                )}
                            </button>
                        </li>
                    ))
                }
            </ul >

        }
        </>
    )
}

export default Nav;