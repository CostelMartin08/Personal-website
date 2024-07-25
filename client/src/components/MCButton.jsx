import React from "react";




const Button = ({ indx }) => {

    return (

        <>

            <button
                className={`${indx === 2 || indx === 5 ? 'text-white' : 'text-color-principal'} 
                 bg-transparent special-font font-black
                 text-xl sm:text-3xl lg:text-4xl`}
                onClick={() => scrollToComponent(0)}>MC</button>

        </>
    )
}

export default Button;