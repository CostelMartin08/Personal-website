import React from "react";
import { Link } from "react-router-dom";
import './main.css';

const NotFound = () => {

    return (
        <>

            <nav className="navbar w-100 px-md-1 px-lg-5 px-xl-2">

                <div className="container-fluid px-md-4 py-md-4 position-relative">

                    <Link to='/' type='button' className='bg-transparent border-0 navbar-brand first-way font'>MC</Link>

                   <Link to='/'>
                        <i className=" fa-not-found fa-solid fa-rotate-left"></i>

                 </Link>

                </div>
            </nav>

            <div className="page-not-found container-fluid  position-relative">
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

                <div className="vh-100 main-font d-flex justify-content-center align-items-center flex-column">
                    <h1 className="not-found ">404</h1>
                    <p className="not-found-p">This website has only one page (for now).</p>
                </div>
            </div>

        </>
    )
}


export default NotFound;