import React from "react";

const CoursesCard = (props) => {

    const teckStack = props.teckStack;

    return (

        <div className="card card-border-courses mx-auto">

            <div className="card-body-courses">

                <div className="title-card-courses">

                    <h4 className="school">{props.school}</h4>
                    <p className="title-course">{props.course}</p>
                    <p>{props.date}</p>

                </div>

                <div>
                    <p className="content-card-courses">
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

        </div>


    )
}

export default CoursesCard;