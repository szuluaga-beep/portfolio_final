import React from 'react'
import Subtitle from './shared/Subtitle'
import Image from 'next/image'
import Title from './shared/Title'

const Education = () => {
    return (
        <div className='mx-10  px-2 md:px-20 my-5'>
            <Title text='Courses and education' />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                <div className='rounded-lg shadow-lg px-4 py-5 flex flex-col items-center justify-center'>
                    <Image
                        src={"https://res.cloudinary.com/dpfrys3uj/image/upload/v1716256289/portfolio/ylxrevw8lcohcxs20ecz.png"}
                        alt=''
                        width={100}
                        height={100}
                        className='object-cover'
                    />
                    <div className='text-center'>

                        <span className='font-bold text-2xl'>
                            Systems Engineer
                        </span>
                        <p className='text-xl font-semibold'>
                            Instituto Tecnólogico Metropolitano
                        </p>
                    </div>
                </div>
                <div className='rounded-lg shadow-lg px-4 py-5 flex flex-col items-center justify-center'>
                    <Image
                        src={"https://res.cloudinary.com/dpfrys3uj/image/upload/v1716256289/portfolio/ylxrevw8lcohcxs20ecz.png"}
                        alt=''
                        width={100}
                        height={100}
                        className=''
                    />
                    <div className='text-center'>

                        <span className='font-bold text-2xl'>
                            Information Systems Technology
                        </span>
                        <p className='text-xl font-semibold'>
                            Instituto Tecnólogico Metropolitano
                        </p>
                    </div>
                </div>
                <div className='rounded-lg shadow-lg px-4 py-5 flex flex-col items-center justify-center'>
                    <Image
                        src={"https://res.cloudinary.com/dpfrys3uj/image/upload/v1716256289/portfolio/dxk0qtx5jan85m9dohxg.png"}
                        alt=''
                        width={100}
                        className=''
                        height={100}
                    />
                    <div className='text-center'>

                        <span className='font-bold text-2xl'>
                            Microsoft AI Fundamentals
                        </span>
                        <p className='text-xl font-semibold'>
                            Azure
                        </p>
                    </div>
                </div>
                <div className='rounded-lg shadow-lg px-4 py-5 flex flex-col items-center justify-center'>
                    <Image
                        src={"https://res.cloudinary.com/dpfrys3uj/image/upload/v1716256289/portfolio/dxk0qtx5jan85m9dohxg.png"}
                        alt=''
                        width={100}
                        className=''
                        height={100}
                    />
                    <div className='text-center'>

                        <span className='font-bold text-2xl'>
                            Microsoft Azure Fundamentals
                        </span>
                        <p className='text-xl font-semibold'>
                            Azure
                        </p>
                    </div>
                </div>
                <div className='rounded-lg shadow-lg px-4 py-5 flex flex-col items-center justify-center'>
                    <Image
                        src={"https://res.cloudinary.com/dpfrys3uj/image/upload/v1716256812/portfolio/ua218u4wote42w6v6lea.png"}
                        alt=''
                        width={100}
                        className=''
                        height={100}
                    />
                    <div className='text-center'>

                        <span className='font-bold text-2xl'>
                            Basic level business intelligence
                        </span>
                        <p className='text-xl font-semibold'>
                            Eafit
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education