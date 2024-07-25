import React from "react";

import { Button } from "./button";


const ProjectsCard = (props) => {

    return (

        <div className="show-more-effect bg-white card-border-projects overflow-hidden relative py-4 my-2 mx-auto">

            <div className="card-section lg:p-3 transition ease-in-out row">

                <div className="md:w-1/2 flex flex-col items-start justify-around gap-4">

                    <section className="w-full flex flex-col items-center md:items-start md:flex-row gap-2">

                        <div className=
                            {` 
                        ${props.logo === '/icon/logo/shortly.webp' ? 'border-2 border-black' : null}
                        ${props.logo === '/icon/logo/tipmarketingLogo.webp' ? 'border-2 border-black' : null}
                        flex  rounded-md size-20
                        `}>

                            <img className="object-cover rounded-md" src={props.logo} alt='logo-app' />

                        </div>


                        <div className="flex flex-col items-center md:items-start space-y-2">
                            <p className="font-black text-xl xl:text-2xl line-clamp-1">{props.name}</p>
                            <p className="font-extralight text-lg text-zinc-400">{props.type}</p>
                        </div>

                    </section>

                    <p className="text-lg line-clamp-3 sm:line-clamp-4 md:line-clamp-none">
                        {props.description}
                    </p>

                    <div className="hidden md:flex  justify-start gap-5">
                        <Button text='Visit now' bg='bg-[#0C3B2E]' />
                        <Button text='Code' bg='bg-[#3e3e3e]' />
                    </div>

                </div>

                <div className="flex md:w-1/2">

                    <img
                        className="w-full h-[240px] md:h-[400px] rounded-md object-cover object-top"

                        src={props.image} alt='image-description'
                    />

                </div>



            </div>

            <div className="show-more flex flex-col justify-around rounded-xl space-y-4 p-4">

                <div className="space-y-3">
                    <h1 className="font-black text-2xl">{props.name}</h1>

                    <a href={props.visit} className="text-lg font-light underline">{props.visit}</a>
                </div>

                <p className="text-base font-light"> {props.description}

                </p>

                <div className="flex justify-between">
                    <Button text='Visit now' bg='bg-[#0C3B2E]' href={props.visit} />
                    <Button text='Code' bg='bg-[#3e3e3e]' href={props.code} />
                </div>

            </div>
        </div>

    )
}

export default ProjectsCard;