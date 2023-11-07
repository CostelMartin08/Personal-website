import React from "react";

const ProjectsCard = (props) => {



    return (

        <div className="card columns-project mx-auto">

            <div className="container-project">

                <button className="btn-orange">{props.type}</button>
                <p className="paragraph">{props.name}</p>
            </div>

            <div>
                <p className="description">
                    {props.description}
                </p>
            </div>
            <div className="d-flex justify-content-around align-items-center h-100">
                <a href={props.code}>
                    <button type="button" className="btn btn-outline-success">Code</button>
                </a>
                <a href={props.visit}>
                    <button type="button" className="btn btn-success">Visit</button>
                </a>

            </div>

        </div>

    )
}

export default ProjectsCard;