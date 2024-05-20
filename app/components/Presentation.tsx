'use client'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

import profilePic from '../../public/images/picture.png'
import Image from 'next/image';
import { Chip } from '@nextui-org/react';
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

        <div className='mt-2 px-10 flex justify-center items-center py-5 w-full shadow-2xl grid-cols-2'>
            <div className='flex flex-col justify-start items-center sm:items-start rounded-lg px-8 py-10 gap-4 mt-2 w-full xl:w-3/4'>
                <Image
                    className="w-52 h-52 rounded-3xl -rotate-12 ml-3 object-cover mb-3 hover:animate-spin"
                    src={profilePic}
                    alt="Picture of the author"
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
                />

                <div className='flex flex-col'>
                    <h1 className='text-4xl font-bold mb-3'>Hi, I am Steven - Developer and Engineer</h1>

                    <span className='sm:text-2xl md:text-4xl leading-snug'>
                        I enjoy creating products from
                        scratch and improve existing ones.<br />
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

                    <a href="https://api.whatsapp.com/send/?phone=573137896663" className="px-3 hover:scale-110 h-10 font-semibold rounded-full bg-violet-600 text-white flex items-center" target='_blank'>
                        Let&apos;s talk
                    </a>

                    <Chip className=' p-4' color="success" variant="dot">Open for opportunities</Chip>
                </div>
            </div>


            <div className='hidden xl:block w-1/4'>

                <MobilePicture style="mt-5 w-full" />
            </div>




        </div>



    )
}

export default Presentation