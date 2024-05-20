import React from 'react'
import Title from './shared/Title'
// import Image from 'next/image'
import Project from './Project'
import { Button, Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react'

const projects = [
    {
        id: 1,
        title: "Chimba tours",
        urlProject: "https://github.com/szuluaga-beep/chimba-tours",
        photoUrl: "https://res.cloudinary.com/dpfrys3uj/image/upload/v1716233315/portfolio/atpxgdcvqkkhmwhrgatk.png"
    },
    {
        id: 2,
        title: "Chimba tours",
        urlProject: "https://github.com/szuluaga-beep/chimba-tours",
        photoUrl: "https://res.cloudinary.com/dpfrys3uj/image/upload/v1716233315/portfolio/atpxgdcvqkkhmwhrgatk.png"
    },
    {
        id: 3,
        title: "Chimba tours",
        urlProject: "https://github.com/szuluaga-beep/chimba-tours",
        photoUrl: "https://res.cloudinary.com/dpfrys3uj/image/upload/v1716233315/portfolio/atpxgdcvqkkhmwhrgatk.png"
    },
    {
        id: 4,
        title: "Chimba tours",
        urlProject: "https://github.com/szuluaga-beep/chimba-tours",
        photoUrl: "https://res.cloudinary.com/dpfrys3uj/image/upload/v1716233315/portfolio/atpxgdcvqkkhmwhrgatk.png"
    },
]


const Portfolio = () => {
    return (
        <div className='mt-2 px-10 py-5'>
            <Title title='Portfolio projects' />
            <div>

                <p className='text-2xl md:text-4xl leading-snug'>
                    Every project is like a new little story: <br />
                    unique starting points and tasks, but all with a happy end.
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 px-10'>
                {
                    projects.map((project, index) => (


                        <Project key={index} projectData={project} />
                        // <Project key={index} projectData={project}/>
                    )

                    )
                }


            </div>

        </div>
    )
}

export default Portfolio