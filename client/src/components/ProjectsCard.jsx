import React from "react";

const ProjectsCard = (props) => {



    return (

        <div className="card card-border mx-auto">

            <div className="card-body">

                <div className="title-card">

                    <button className="btn-orange">{props.type}</button>
                    <p className="title-project">{props.name}</p>

                </div>

        
                    <p className="content-card">
                        {props.description}
                    </p>
           

                <div className="nav-card">

                    <a
                        href={props.code}
                        type="button"
                        className="btn btn-outline-success">
                        Code
                    </a>
                    <a
                        href={props.visit}
                        type="button"
                        className="btn btn-success">
                        Visit

                    </a>

                </div>

            </div>

        </div>

    )
}

export default ProjectsCard;