'use client'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { TvIcon } from '@heroicons/react/16/solid';
import profilePic from '../../public/images/picture.png'
import Image from 'next/image';
import { Chip } from '@nextui-org/react';
import WebPicture from './web/Web';
import MobilePicture from './mobile/Mobile';

const words = ["web apps", "websites", "mobile apps", "landing pages"]


const Presentation = () => {

    const [currentWord, setCurrentWord] = useState(words[0]);
    useEffect(() => {
        const intervalId = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * words.length);
            setCurrentWord(words[randomIndex]);
        }, 1000); // Update every second (1000 milliseconds)

        return () => clearInterval(intervalId); // Clear the interval when the component unmounts
    }, []);
    return (

        <div className='mt-2 px-10 py-5 flex shadow-2xl sm:grid-cols-1 md:grid-cols-2'>
            <div className='flex flex-col justify-start items-start rounded-lg px-8 py-10 gap-4 sm:w-full md:w-3/4  mt-2'>
                <Image
                    className="w-52 h-52 rounded-3xl -rotate-12 ml-3 object-cover hover:animate-spin"
                    src={profilePic}
                    alt="Picture of the author"
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
                />

                <h1 className='text-4xl font-bold'>Hi, I am Steven - Developer and Engineer</h1>
                <div className='flex flex-col'>

                    <span className='sm:text-2xl md:text-4xl leading-snug'>
                        I enjoy creating products from
                        scratch and improve existing ones.<br/>
                        In simple terms, I develop
                    </span>
                    <motion.div
                        transition={{
                            ease: "linear",
                            duration: 2,
                            x: { duration: 1 }
                        }}>
                        <span className='sm:text-2xl md:text-4xl'>{
                            currentWord
                        }</span>
                    </motion.div>
                    <span className='sm:text-2xl md:text-4xl leading-snug'>
                        that make a profit or enhance business.
                    </span>
                </div>
                <div className='flex gap-2 justify-center items-center'>

                    <a href="https://api.whatsapp.com/send/?phone=573137896663" className=" hover:scale-110 h-10 px-6 font-semibold rounded-full bg-violet-600 text-white flex items-center" target='_blank'>
                        Let&apos;s talk
                    </a>

                    <Chip className=' p-4' color="success" variant="dot">Open for opportunities</Chip>
                </div>
            </div>
            <div className='sm:hidden md:block w-1/4 left-5 gap-2 flex flex-wrap p-5 relative'>
                <MobilePicture style="sm:hidden md:block w-3/5 absolute top-0 right-0 stroke-2" />
                <WebPicture style="sm:hidden md:block w-3/5 absolute bottom-0 left-0 stroke-2" />

            </div>

        </div>



    )
}

export default Presentation