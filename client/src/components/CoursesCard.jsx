import React from "react";

const CoursesCard = (props) => {

    const teckStack = props.teckStack;

    return (

        <div className="card columns-courses mx-auto">

            <div className="container-course">

                <h4 className="school">{props.school}</h4>
                <p className="title-course m-0">{props.course}</p>
                <p>{props.date}</p>

            </div>

            <div>
                <p className="description-course">
                    {props.description}
                </p>
            </div>

            <div className="teck">

                <p className="title-course">I learned</p>
                <ul>
                    <li>{teckStack ? teckStack[0] : null}</li>
                    <li>{teckStack ? teckStack[1] : null}</li>
                    <li>{teckStack ? teckStack[2] : null}</li>
                    <li>{teckStack ? teckStack[3] : null}</li>
                </ul>


            </div>

        </div>


    )
}

export default CoursesCard;