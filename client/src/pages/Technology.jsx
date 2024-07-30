import React, { forwardRef } from "react";
import { Logo } from "../components/logo";



const Technology = forwardRef((props, ref) => {



    return (

        <section name='Tech Page' data-page-name="/technology" className="project-page" id='4' ref={ref}>

            <section className="prj-pg flex flex-col justify-center items-center gap-5 md:gap-12">

                <h3 className="text-xl sm:text-3xl md:text-5xl lato-black">I have learned and work with...</h3>

                <Logo />

            </section>

        </section>
    )
})

export default Technology;