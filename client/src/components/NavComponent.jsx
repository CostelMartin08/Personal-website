import React from "react";
import './nav.css';

const style = {

    ul: {

        listStyleType: 'none',
        padding: '0',
        margin: '0',

    },

    button: {
        border: '0',
        backgroundColor: 'transparent',
        padding: '0'
    }
}

const Nav = (props) => {

    const scrollToComponent = (index) => {
        props.componentRefs[index].current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <> {props.currentIndex === 5 ?

            null

            :

            <ul
                className="class-absolute"
                style={style.ul}>
                {
                    [0, 1, 2, 3, 4].map((index) => (
                        <li key={index} onClick={() => scrollToComponent(index)}>
                            <button
                            className={
                                (props.currentIndex === 0 || props.currentIndex === 2 || props.currentIndex === 3) ? 
                                'text-white' : 
                                'text-color-principal'
                              }
                              
                                style={style.button}>
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