import React from 'react'
import Title from './shared/Title'
import Project from './Project'

const projects = [
    {
        id: 1,
        title: "Código C13",
        url:'https://www.codigoc13.com/',
        photoUrl: "https://res.cloudinary.com/dpfrys3uj/image/upload/v1716236229/portfolio/ou5cccvjevujxezi4ar5.png"
    },
    {
        id: 2,
        title: "Chimba tours",
        url: "https://github.com/szuluaga-beep/chimba-tours",
        photoUrl: "https://res.cloudinary.com/dpfrys3uj/image/upload/v1716233315/portfolio/atpxgdcvqkkhmwhrgatk.png"
    },
    {
        id: 3,
        title: "Dashboard with Next-JS",
        url: "https://github.com/szuluaga-beep/nextjs-dashboard",
        photoUrl: "https://res.cloudinary.com/dpfrys3uj/image/upload/v1716238586/portfolio/j70l0dlbxhhkilrrhzgd.png"
    },
    {
        id: 4,
        title: "Cinemapedia with flutter",
        url: "https://github.com/szuluaga-beep/cinemapedia",
        photoUrl: "https://res.cloudinary.com/dpfrys3uj/image/upload/v1716238855/portfolio/n29jpedmeihaje1a0at8.png"
    },
]


const Portfolio = () => {
    return (
        <div className='mx-2 md:mx-10 px-3 md:px-10 py-5'>
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