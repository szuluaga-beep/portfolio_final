import React from 'react'
import Title from './shared/Title'
import { Chip } from '@nextui-org/react'

const Skills = () => {
    return (
        <div className='mx-2 md:mx-10 my-5 px-10 py-5'>

            <Title title='My skill/toolset' />

            <div className='mt-4'>
                <h3 className='text-lg'>
                    Developer frameworks & Skills:
                </h3>
                <div className='flex gap-3 mt-4'>

                    <Chip className='bg-violet-600'>Typescript</Chip>
                    <Chip className='bg-violet-600'>React JS</Chip>
                    <Chip className='bg-violet-600'>Next JS</Chip>
                    <Chip className='bg-violet-600'>Tailwind CSS</Chip>
                    <Chip className='bg-violet-600'>Material UI</Chip>
                    <Chip className='bg-violet-600'>Flutter</Chip>
                    <Chip className='bg-violet-600'>React Native</Chip>
                    <Chip className='bg-violet-600'>Mysql</Chip>
                    <Chip className='bg-violet-600'>Mongo DB</Chip>
                    <Chip className='bg-violet-600'>Github</Chip>
                </div>
            </div>
            <div className='mt-4'>
                <h3 className='text-lg'>
                    Additional skills:
                    :
                </h3>
                <div className='flex gap-3 mt-4'>

                    <Chip color='primary'>DevOps</Chip>
                    <Chip color='primary'>Inteligencia Artificial</Chip>
                    <Chip color='primary'>ETL&apos;s</Chip>
                    <Chip color='primary'>Power BI</Chip>
                    <Chip color='primary'>Azure -AWS</Chip>
                    <Chip color='primary'>Docker</Chip>

                </div>
            </div>
        </div>
    )
}

export default Skills