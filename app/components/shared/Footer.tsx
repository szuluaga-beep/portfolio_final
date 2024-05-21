
import React from 'react'
import { LinkIcon } from '@nextui-org/react'
import { useTheme } from 'next-themes'

const Footer = () => {
    
    return (
        <footer className='text-white bg-violet-600 mt-4 px-10 py-5 rounded-t-3xl flex justify-center'>
            <div className='grid gap-2 place-items-center'>
                <h2 className='text-xl md:text-4xl font-bold'>
                    Let&apos;s talk about your project:
                </h2>
                <a className='text-lg md:text-3xl font-semibold underline' href="mailto:stevenzuluaga54@gmail.com">
                    stevenzuluaga54@gmail.com
                </a>
                <div className='flex gap-5' >
                    <a href="https://www.linkedin.com/in/szuluagadev/" target='_blank' className='flex text-base'>
                        <LinkIcon /> Linkedin
                    </a>
                    <a href="https://github.com/szuluaga-beep" target='_blank' className='flex text-base'>
                        <LinkIcon /> Github
                    </a>
                </div>

            </div>

        </footer>
    )
}

export default Footer