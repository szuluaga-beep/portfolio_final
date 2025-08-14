import React from 'react'
import Subtitle from './shared/Subtitle'

const Expertise = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 px-2 md:px-20 my-5'>
            <div className='rounded-lg shadow-lg px-4 py-5 flex flex-col items-center justify-center'>
                <Subtitle text='Years experience'/>
                <p className='text-2xl font-semibold'>+5</p>
            </div>
            <div className='rounded-lg shadow-lg px-4 py-5 flex flex-col items-center justify-center'>
                <Subtitle text='Projects completed'/>
                <p className='text-2xl font-semibold'>+10</p>
            </div>
            <div className='rounded-lg shadow-lg px-4 py-5 flex flex-col items-center justify-center'>
                <Subtitle text='Industries served'/>
                <p className='text-2xl font-semibold'>+5</p>
            </div>
        </div>
    )
}

export default Expertise