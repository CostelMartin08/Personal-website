import React from "react";

import { Button } from "./button";


const ProjectsCard = (props) => {

    return (

        <div className="show-more-effect card-border-projects overflow-hidden relative py-4 mb-8">

            <div className="card-section flex flex-col md:flex-row p-2 lg:p-4 transition ease-in-out gap-4">

                <div className="md:w-3/6 flex flex-col justify-around">

                    <section className="w-full flex flex-col items-center md:items-start md:flex-row gap-2">

                        <div className=
                            {` 
                        ${props.logo === '/icon/logo/shortly.webp' ? 'border-2 border-black' : null}
                        ${props.logo === '/icon/logo/tipmarketingLogo.webp' ? 'border-2 border-black' : null}
                        flex  rounded-md size-14 md:size-20
                        `}>

                            <img className="object-cover rounded-md" src={props.logo} alt='logo-app' />

                        </div>


                        <div className="flex flex-col items-center md:items-start space-y-2">
                            <p className="lato-black text-xl xl:text-2xl line-clamp-1">{props.name}</p>
                            <p className="lato-light text-lg text-zinc-400">{props.type}</p>
                        </div>

                    </section>

                        <p className="text-lg md:py-2  line-clamp-3 sm:line-clamp-4 md:line-clamp-none lg:text-xl">
                            {props.description}
                        </p>

                        <button className="lato-light-italic md:hidden">click for more</button>
                
                    <div className="hidden md:flex justify-start gap-5">
                        <Button text='Visit now' bg='bg-[#0C3B2E]' href={props.visit} />
                        <Button text='Code' bg='bg-[#3e3e3e]' href={props.code} />
                    </div>

                </div>

                <div className="md:w-3/6">

                    <img
                        className="w-full h-[250px] md:h-[400px] rounded-md object-cover object-top"

                        src={props.image} alt='image-description'
                    />

                </div>



            </div>

            <div className="show-more flex flex-col justify-around rounded-xl space-y-4 p-3">

                <div className="space-y-3">
                    <h1 className="lato-black text-3xl">{props.name}</h1>

                    <a href={props.visit} className="text-lg lato-light-italic underline">{props.visit}</a>
                </div>

                <p className="text-lg"> {props.description}

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