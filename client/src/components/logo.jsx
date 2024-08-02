import React, { useState } from 'react';

import Html from '../logo/1.svg';
import Css from '../logo/2.svg';
import Js from '../logo/3.svg';
import Ts from '../logo/4.svg';
import ReactLogo from '../logo/5.svg';
import Next from '../logo/6.svg';
import Mongo from '../logo/7.svg';
import Node from '../logo/8.svg';
import Vite from '../logo/9.svg';
import Express from '../logo/10.svg';
import Webpack from '../logo/11.svg';
import Bootstrap from '../logo/12.svg';
import TailwindCSS from '../logo/13.svg';
import Git from '../logo/14.svg';
import Prisma from '../logo/15.svg';
import Mongoose from '../logo/16.svg';
import GitHub from '../logo/17.svg';
import DigitalOcean from '../logo/18.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFlip } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-flip';
import './style.css';

const logos = {

    logoCSS: [
        { src: Css, alt: 'CSS' },
        { src: TailwindCSS, alt: 'TailwindCSS' },
        { src: Bootstrap, alt: 'Bootstrap' },
    ],
    frame: [
        { src: ReactLogo, alt: 'React' },
        { src: Next, alt: 'Next.js' },
    ],
    basic: [
        { src: Html, alt: 'HTML' },
        { src: Js, alt: 'JavaScript' },
    ],
    database: [
        { src: Mongo, alt: 'MongoDB' },
        { src: Prisma, alt: 'Prisma' },
        { src: Mongoose, alt: 'Mongoose' },
    ],
    ts: [
        { src: Ts, alt: 'TypeScript' },
        { src: DigitalOcean, alt: 'DigitalOcean' },
    ],
    pack: [
        { src: Webpack, alt: 'Webpack' },
        { src: Vite, alt: 'Vite' },
    ],
    node: [
        { src: Node, alt: 'Node.js' },
        { src: Express, alt: 'Express.js' },
    ],
    git: [
        { src: GitHub, alt: 'GitHub' },
        { src: Git, alt: 'Git' },
    ],
};

const SwiperComponent = ({ logos, delay }) => {

    const [data, setData] = useState(null);

    const setView = (alt) => {
        setData(alt);
        setTimeout(() => setData(null), 2000);
    };

    return (
        <Swiper
            lazy={true}
            effect="flip"
            autoplay={{
                delay,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            modules={[EffectFlip, Autoplay]}
            className="size-full relative cursor-help"
        >
            {logos.map((logo, index) => (
                <SwiperSlide key={index} className="border-solid border-2 hover:shadow-xl">

                    {data === logo.alt && (
                        <div className="absolute top-0 text-center w-full p-2 text-sm md:text-lg lato-black">
                            <p>{data}</p>
                        </div>
                    )}
                    <img
                        className="logo"
                        onClick={() => setView(logo.alt)}
                        src={logo.src}
                        alt={logo.alt}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export const Logo = () => {
    return (
        <div className="w-9/12 xs:w-8/12 sm:w-9/12 grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 gap-4 justify-center content-center">
            <SwiperComponent logos={logos.logoCSS} delay={5400} />
            <SwiperComponent logos={logos.frame} delay={7425} />
            <SwiperComponent logos={logos.basic} delay={6950} />
            <SwiperComponent logos={logos.database} delay={7390} />
            <SwiperComponent logos={logos.ts} delay={7140} />
            <SwiperComponent logos={logos.pack} delay={5234} />
            <SwiperComponent logos={logos.node} delay={8510} />
            <SwiperComponent logos={logos.git} delay={5590} />
        </div>
    );
};
