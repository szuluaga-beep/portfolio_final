import React from 'react'
import Subtitle from './shared/Subtitle'
import { experience } from '@/data/experience'
import { Accordion, AccordionItem } from '@nextui-org/react'

export const Expertise = () => {
    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 px-2 md:px-20 my-5'>
                <div className='rounded-lg shadow-lg px-4 py-5 flex flex-col items-center justify-center'>
                    <Subtitle text='Years experience' />
                    <p className='text-2xl font-semibold'>+5</p>
                </div>
                <div className='rounded-lg shadow-lg px-4 py-5 flex flex-col items-center justify-center'>
                    <Subtitle text='Projects completed' />
                    <p className='text-2xl font-semibold'>+10</p>
                </div>
                <div className='rounded-lg shadow-lg px-4 py-5 flex flex-col items-center justify-center'>
                    <Subtitle text='Industries served' />
                    <p className='text-2xl font-semibold'>+5</p>
                </div>

            </div>
            <Experience />
        </div>
    )
}


const Experience = () => {
    return (
        <div className='mx-2 md:mx-20 my-10'>

            <Subtitle text='Professional Experience' />
            <div className='px-2 md:px-20 my-5 grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    experience.map((job, index) => (
                        <details key={index}>
                            <summary className='cursor-pointer font-semibold text-lg mb-2'>
                                {index + 1}. {job.position} at {job.company}
                            </summary>

                            <div className='flex flex-col md:flex-row items-center md:items-start gap-4 p-4 border-b border-gray-300'>
                                <p>{job.duration}</p>
                                <p>{job.location}</p>
                            </div>
                        </details>
                    ))
                }
            </div>
        </div>
    )
}