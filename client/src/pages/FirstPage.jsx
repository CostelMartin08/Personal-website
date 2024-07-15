import React, { forwardRef } from "react";
import './main.css';
import photo from './MartinescuConstantin.webp';
import Svg from "../components/SvgFirstPage";

const style = {
    framework: {
        marginTop: '50px',
        marginLeft: '50px',
    },
    photo: {
        position: 'absolute',
        objectFit: 'cover',
    }
}

const FirstPage = forwardRef((props, ref) => {


    return (

        <section className="first-page" id='0' ref={ref} >

            <div className="first-page-h flex md:flex-row flex-col">

                <div className="left-side h-3/6 md:h-full w-full md:w-1/3 flex flex-col justify-center items-center">

                    <div className="h-1/6"></div>

                    <div className="flex flex-col justify-center items-center px-14 space-y-4">

                        <h1 className="title sm:text-center md:text-left font-bold text-[40px] sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">

                            Junior Frontend <br /> <spam>Developer.</spam>

                        </h1>

                        <p className="text-base font-extralight">I enjoy developing utility-focused frontend products while also providing a pleasant user experience.</p>
                    </div>

                </div>

                <div className="right-side relative h-3/6 md:h-full w-full md:w-2/3">

                    <div className="img-box">
                        <img
                            className="photo"
                            style={style.photo} src={photo}
                        >
                        </img>
                        <span
                            className=" border-2 border-white framework-brd"
                            style={style.framework} >

                        </span>
                    </div>

                    <div className="svg-box">

                        <Svg />

                    </div>

                </div>

            </div >

        </section >


    )
})

export default FirstPage;