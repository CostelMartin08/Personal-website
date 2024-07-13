import React from "react";




const Button = ({ indx }) => {

    return (

        <>

            <button
                className={`${indx === 2 || indx === 5 ? 'second-way' : 'first-way'} 
                 bg-transparent special-font font-black
                 text-xl sm:text-3xl`}
                onClick={() => scrollToComponent(0)}>MC</button>

        </>
    )
}

export default Button;