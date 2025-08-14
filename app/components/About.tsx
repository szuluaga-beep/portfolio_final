import Image from 'next/image'
import React from 'react'
import profilePic from '../../public/images/imagen2.jpg'
import { Chip, Snippet } from '@nextui-org/react'
import Title from './shared/Title'
import Subtitle from './shared/Subtitle'

const About = () => {
    return (
        <div className=" px-2 md:px-20 my-5 py-4 grid grid-cols-1 md:grid-cols-2 gap-2">
            <Image
                src={profilePic}
                alt="Imagen de Steven Zuluaga Cortes"
                // width={300}
                className="rounded-md mx-auto w-56 md:w-60"
            />
            <div className='px-2 md:px-4 flex flex-col gap-4 mt-2'>
                <div>

                    <Snippet
                        className="text-xs"
                        variant="shadow" color="primary">
                        Web and mobile developer and Engineer
                    </Snippet>
                </div>
                <div className='mx-10'>
                    <Title text='Hi, I&apos;m Steven Zuluaga Cortés' />

                    <Subtitle
                        text='Your strategic partner for digital solutions' />
                </div>
                <h3 className='text-lg mx-10'>
                    With 5+ years of experience in web and mobile development for B2B, B2C, platforms, I engineer user-centric digital interfaces that align with the strategic objectives of the business. My background leverages analytical and data-driven management skills to ensure optimal user experience and product success.
                </h3>
            </div>


        </div>
    )
}

export default About