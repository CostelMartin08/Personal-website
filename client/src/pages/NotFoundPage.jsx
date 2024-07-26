import React from "react";
import { Link } from "react-router-dom";
import './main.css';

const NotFound = () => {

    return (
        <section>

            <nav className="navbar p-3 w-full md:px-1 lg:px-5 xl:px-2">

                <div className="container flex justify-between mx-auto md:p-4 relative">

                    <Link to='/' type='button' className='bg-transparent special-font font-black
                 text-xl sm:text-3xl lg:text-4xl'>MC</Link>

                   <Link to='/'>
                        <i className=" text-3xl fa-solid fa-rotate-left"></i>

                 </Link>

                </div>
            </nav>

            <div className="page-not-found container mx-auto relative">
                <div className="svg-set1">
                    <svg viewBox="0 -120 80 60" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                        <line x1="10" y1="10" x2="10" y2="50" stroke="#0C3B2E" stroke-width="2" />
                        <line x1="10" y1="50" x2="50" y2="50" stroke="#0C3B2E" stroke-width="2" />
                    </svg>
                    <svg viewBox="0 120 80 60" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                        <line x1="10" y1="10" x2="50" y2="10" stroke="#0C3B2E" stroke-width="2" />
                        <line x1="50" y1="10" x2="50" y2="50" stroke="#0C3B2E" stroke-width="2" />
                    </svg>
                </div>

                <div className="h-dvh flex justify-center items-center flex-col">
                    <h1 className="not-found lato-bold">404</h1>
                    <p className="not-found-p lato-light">This website has only one page (for now).</p>
                </div>
            </div>

        </section>
    )
}


export default NotFound;