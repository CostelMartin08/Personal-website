import React, { forwardRef } from "react";
import ProjectsCard from "../components/ProjectsCard";
import data from '../assets/mock';
import './projects.css';


const Projects = forwardRef((props, ref) => {

    const projectData = data.projectData;
    const pairs = [];

    for (let i = 0; i < projectData.length; i += 2) {
        const pair = projectData.slice(i, i + 2);
        pairs.push(pair);
    }

    return (

        <section className="project-page" id='3' ref={ref}>

            <div className="d-grid justify-content-center align-content-center container grd-section1 padding ">

               
                    <h3 className="first-way main-font h2 title-page ms-lg-0  font-size-courses">Projects</h3>
           

                <div className="d-md-none">

                    <div className="carousel slide" id="myProjectsCarousel" data-bs-ride="carousel">

                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#myProjectsCarousel" data-bs-slide-to="0" className="active bg-first-way" aria-label="Slide 1" aria-current="true"></button>
                            <button type="button" data-bs-target="#myProjectsCarousel" data-bs-slide-to="1" aria-label="Slide 2" className='bg-first-way'></button>
                            <button type="button" data-bs-target="#myProjectsCarousel" data-bs-slide-to="2" aria-label="Slide 3" className='bg-first-way'></button>
                            <button type="button" data-bs-target="#myProjectsCarousel" data-bs-slide-to="3" aria-label="Slide 4" className='bg-first-way'></button>
                        </div>

                        <div className="carousel-inner">

                            {projectData.map((data, index) => (
                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                    <ProjectsCard
                                        type={data.type}
                                        name={data.name}
                                        description={data.description}
                                        code={data.code}
                                        visit={data.visit}
                                    />
                                </div>
                            ))}

                        </div>

                        <button className="crsl-btn-md carousel-control-prev carousel-set-prevP" type="button" data-bs-target="#myProjectsCarousel" data-bs-slide="prev">
                            <i class="d-none d-sm-block first-way fa-solid fa-chevron-left fa-lg"></i>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button className="crsl-btn-md carousel-control-next carousel-set-nextP" type="button" data-bs-target="#myProjectsCarousel" data-bs-slide="next">
                            <i class="d-none d-sm-block first-way fa-solid fa-chevron-right fa-lg"></i>
                            <span className="visually-hidden">Next</span>
                        </button>

                    </div>

                </div>

                <div className="d-md-flex d-none d-xl-none">

                    <div className="carousel slide" id="myProjectsCarousel-md" data-bs-ride="carousel">

                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#myProjectsCarousel-md" data-bs-slide-to="0" className='bg-first-way active' aria-label="Slide 1" aria-current="true"></button>
                            <button type="button" data-bs-target="#myProjectsCarousel-md" data-bs-slide-to="1" aria-label="Slide 2" className='bg-first-way'></button>
                        </div>



                        <div className="carousel-inner prjc">

                            {pairs?.map((pair, index) => (
                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>

                                    <div className="row prjc-adjst">
                                        {pair.map((data, dataIndex) => (

                                            <div className="col" key={dataIndex}>

                                                <ProjectsCard
                                                    type={data.type}
                                                    name={data.name}
                                                    description={data.description}
                                                    code={data.code}
                                                    visit={data.visit}
                                                />
                                            </div>
                                        ))}

                                    </div>

                                </div>
                            ))}

                        </div>

                        <button className="crsl-btn-md carousel-control-prev carousel-set-prevP" type="button" data-bs-target="#myProjectsCarousel-md" data-bs-slide="prev">
                            <i class="first-way fa-solid fa-chevron-left fa-lg"></i>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button className="crsl-btn-md carousel-control-next carousel-set-nextP" type="button" data-bs-target="#myProjectsCarousel-md" data-bs-slide="next">
                            <i class="first-way fa-solid fa-chevron-right fa-lg"></i>
                            <span className="visually-hidden">Next</span>
                        </button>

                    </div>

                </div>

                <div className="d-none d-xl-flex">

                    <div className="row row-cols-2 position h-100">

                        {projectData.map((data, index) => (

                            <div className='col-3' key={index}>
                                <ProjectsCard
                                    type={data.type}
                                    name={data.name}
                                    description={data.description}
                                    code={data.code}
                                    visit={data.visit}
                                />
                            </div>

                        ))}



                    </div>

                </div>

            </div>

            <div className="bg-first-way grd-section2">

                <div className="d-none d-md-flex justify-content-center h-100">


                    <div className="position text-center second-way">

                        <i className=" fa-brands fa-css3-alt fa-xl"></i>
                        <i className="fa-brands fa-html5 fa-xl"></i>
                        <i className="fa-brands fa-js fa-xl"></i>
                        <i className="fa-brands fa-react fa-xl"></i>
                        <i className="fa-brands fa-node fa-xl"></i>
                        <i className="fa-brands fa-git-alt fa-xl"></i>

                    </div>


                </div>

                <div className="logo-band d-md-none">


                    <div className="logo-content">
                        <i className=" fa-brands fa-css3-alt fa-xl"></i>
                        <i className="fa-brands fa-bootstrap fa-xl"></i>
                        <i className="fa-brands fa-html5 fa-xl"></i>
                        <i className="fa-brands fa-js fa-xl"></i>
                        <i className="fa-brands fa-react fa-xl"></i>
                        <i className="fa-brands fa-node fa-xl"></i>
                        <i className="fa-brands fa-git-alt fa-xl"></i>

                    </div>

                </div>

            </div>

        </section >
    )
})

export default Projects;