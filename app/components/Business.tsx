import React from 'react'
import Title from './shared/Title'

const Business = () => {
    return (
        <div className='my-2 px-10 py-5'>
            <Title title='What I can do for you' />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='shadow-xl py-4 px-5 rounded-lg  flex flex-col justify-center'>
                    <h2 className='text-3xl'>
                        For businesses
                    </h2>
                    <p className='text-lg'>
                        I develop apps that are friendly and valuable for customers and easy to use.
                    </p>
                </div>
                <div className='shadow-xl py-4 px-5 rounded-lg  flex flex-col justify-center'>
                    <h2 className='text-3xl'>
                        For startups

                    </h2>
                    <p className='text-lg'>
                        I help to identify the problem and develop an MVP. I will advise on tools for building if you don&apos;t have an engineer or development resources.
                    </p>
                </div>
                <div className='shadow-xl py-4 px-5 rounded-lg  flex flex-col justify-center'>
                    <h2 className='text-3xl'>
                        For product teams
                    </h2>
                    <p className='text-lg'>
                        I design growth experiments and help your team look at the challenges differently to build a better product.
                    </p>
                </div>



            </div>

        </div>
    )
}

export default Business