import React from "react";
import Udemy from '../../public/icon/logo/udemy.webp';
import ITSchool from '../../public/icon/logo/itschool.webp';
import Mosh from '../../public/icon/logo/mosh.webp';

const CoursesCard = (props) => {

    const teckStack = props.teckStack;

    return (
        <>

            


            <div className="card relative py-3 w-[96%] xs:w-11/12 sm:w-8/12 md:w-11/12 lg:11/12 my-2  mx-auto card-border-courses">


                <div className="card-body-courses relative">


                    <div className="flex items-center justify-center flex-col space-y-3">

                        <div className="rounded-full overflow-hidden size-16 md:size-28">
                            <img className="object-cover" src={props.logo} alt='logo'></img>
                        </div>

                        <p className="font-black text-xl text-center p-2">{props.course}</p>
                        <p className="font-extralight">{props.date}</p>

                    </div>

                    <div>
                        <p className="my-2 line-clamp-3">
                            {props.description}
                        </p>
                    </div>

                    <div className="teck">

                        <p className="font-black text-lg">I learned:</p>
                        <ul className="text-xl">
                            <li>{teckStack ? teckStack[0] : null}</li>
                            <li>{teckStack ? teckStack[1] : null}</li>
                            <li>{teckStack ? teckStack[2] : null}</li>
                            <li>{teckStack ? teckStack[3] : null}</li>
                        </ul>


                    </div>

                </div>

            </div>

        </>

    )
}

export default CoursesCard;