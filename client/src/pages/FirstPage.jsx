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

        <section name='Home Page' data-page-name="/home" className="first-page" id='0' ref={ref} >

            <div className="first-page-h flex md:flex-row flex-col">

                <div className="left-side h-3/6 w-full md:h-full md:w-2/5 flex flex-col justify-center items-center">

                    <div className="w-3/4 flex flex-col justify-center items-center space-y-4">

                        <h1 className="lato-black  text-5xl lg:text-7xl xl:text-8xl">

                            Junior Frontend <br /><span>Developer.</span>

                        </h1>

                        <p className="text-lg lato-light">I enjoy developing utility-focused frontend products while also providing a pleasant user experience.</p>
                    </div>

                </div>

                <div className="right-side relative h-3/6 md:h-full w-full md:w-3/5">

                    <div className="img-box">
                        <img
                            className="photo"
                            alt='Martinescu Constantin'
                            style={style.photo}
                            src={photo}
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