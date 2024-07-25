import React, { useState } from "react";

const CoursesCard = (props) => {

    const teckStack = props.teckStack;

    return (

        <div
          
            className="card card-border-courses overflow-hidden relative py-3 w-[96%] xs:w-11/12 sm:w-8/12 md:w-11/12  my-2 mx-auto ">

            <div className="card-section transition ease-in-out  card-body-courses">

                <div className="flex items-center justify-center flex-col space-y-3">

                    <div className="rounded-full overflow-hidden size-16 md:size-28">
                        <img className="object-cover" src={props.logo} alt='logo'></img>
                    </div>

                    <p className="font-black text-xl text-center p-2 line-clamp-2">{props.course}</p>
                    <p className="font-extralight">{props.date}</p>

                </div>

                <div>
                    <p className="my-2 line-clamp-3">
                        {props.description}
                    </p>
                </div>

                <div className="space-y-3">

                    <p className="font-black text-lg">I learned:</p>
                    <div className="font-bold text-base">
                        <p className="flex items-center gap-2 "><Check />{teckStack ? teckStack[0] : null}</p>
                        <p className="flex items-center gap-2"><Check />{teckStack ? teckStack[1] : null}</p>
                        <p className="flex items-center gap-2"><Check />{teckStack ? teckStack[2] : null}</p>
                        <p className="flex items-center gap-2"><Check />{teckStack ? teckStack[3] : null}</p>
                    </div>

                </div>

            </div>

            <div className="show-more rounded-xl space-y-4 p-4">

                <h1 className="font-black text-2xl">{props.course}</h1>

                <p className="text-xl font-light">{props.description}</p>
            </div>
        </div>

    )
}

export default CoursesCard;

const Check = () => {

    return (
        <>
            <i className="text-xl fa-solid fa-circle-check px-1 text-[#0C3B2E]"></i>
        </>
    )
}