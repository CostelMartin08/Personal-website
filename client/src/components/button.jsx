import React from 'react';





export const Button = (props) => {

    return (

        <>
            <a
                href={props.href}
                className={`${props.bg} border-2 border-[#3e3e3e] rounded-lg text-white px-4 py-3 
                text-base lato-bold hover:border-[#fff] cursor-pointer transition`}
            >
                {props.text}
            </a>


        </>
    )
}