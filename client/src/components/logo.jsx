import React from 'react';

import Html from '../logo/1.svg';
import Css from '../logo/2.svg';
import Js from '../logo/3.svg';
import Ts from '../logo/4.svg';
import Reat from '../logo/5.svg';
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


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFlip } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-flip';
import './style.css';

export const Logo = () => {

    const logoCSS = [{ src: Css, alt: 'CSS Logo' }, { src: TailwindCSS, alt: 'TailwindCSS Logo' }, { src: Bootstrap, alt: 'Bootstrap Logo' },]
    const frame = [{ src: Reat, alt: 'React Logo' }, { src: Next, alt: 'Next Logo' },]
    const basic = [{ src: Html, alt: 'HTML Logo' }, { src: Js, alt: 'JavaScript Logo' },]
    const dataBase = [{ src: Mongo, alt: 'MongoDD Logo' }, { src: Prisma, alt: 'Prisma Logo' }, { src: Mongoose, alt: 'Mogoose Logo' },]
    const ts = [{ src: Ts, alt: 'TypeScript Logo' },]
    const pack = [{ src: Webpack, alt: 'WebPack Logo' }, { src: Vite, alt: 'Vite Logo' },]
    const node = [{ src: Node, alt: 'Node.js Logo' }, { src: Express, alt: 'Express.js Logo' },]
    const git = [{ src: GitHub, alt: 'GitHub Logo' }, { src: Git, alt: 'Git Logo' }]

    return (
        <>

            <div className="mx-auto w-9/12 xs:w-8/12 sm:w-7/12 md:w-9/12 grid grid-cols-2 md:grid-cols-4 gap-4 justify-center content-center">

                <Swiper
                    effect={'flip'}
                    autoplay={{
                        delay: 6950,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectFlip, Autoplay]}
                    className='size-full'>
                    {logoCSS.map((logo, index) => (
                        <SwiperSlide key={index} className="border-solid border-2">
                            <img className='logo' onTouchMove={()=> console.log('h')} src={logo.src} alt={logo.alt} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Swiper
                    effect={'flip'}
                    autoplay={{
                        delay: 7325,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectFlip, Autoplay]}
                    className='size-full'>
                    {frame.map((logo, index) => (
                        <SwiperSlide key={index} className="border-solid border-2">
                            <img className='logo' src={logo.src} alt={logo.alt} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Swiper
                    effect={'flip'}
                    autoplay={{
                        delay: 6450,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectFlip, Autoplay]}
                    className='size-full'>
                    {basic.map((logo, index) => (
                        <SwiperSlide key={index} className="border-solid border-2">
                            <img className='logo' src={logo.src} alt={logo.alt} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Swiper
                    effect={'flip'}
                    autoplay={{
                        delay: 7150,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectFlip, Autoplay]}
                    className='size-full'>
                    {dataBase.map((logo, index) => (
                        <SwiperSlide key={index} className="border-solid border-2">
                            <img className='logo' src={logo.src} alt={logo.alt} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Swiper
                    effect={'flip'}
                    autoplay={{
                        delay: 7500,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectFlip, Autoplay]}
                    className='size-full'>
                    {ts.map((logo, index) => (
                        <SwiperSlide key={index} className="border-solid border-2">
                            <img className='logo' src={logo.src} alt={logo.alt} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Swiper
                    effect={'flip'}
                    autoplay={{
                        delay: 5650,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectFlip, Autoplay]}
                    className='size-full'>
                    {pack.map((logo, index) => (
                        <SwiperSlide key={index} className="border-solid border-2">
                            <img className='logo' src={logo.src} alt={logo.alt} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Swiper
                    effect={'flip'}
                    autoplay={{
                        delay: 5550,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectFlip, Autoplay]}
                    className='size-full'>
                    {node.map((logo, index) => (
                        <SwiperSlide key={index} className="border-solid border-2">
                            <img className='logo' src={logo.src} alt={logo.alt} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Swiper
                    effect={'flip'}
                    autoplay={{
                        delay: 5550,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectFlip, Autoplay]}
                    className='size-full'>
                    {git.map((logo, index) => (
                        <SwiperSlide key={index} className="border-solid border-2">
                            <img className='logo' src={logo.src} alt={logo.alt} />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

        </>
    )


}