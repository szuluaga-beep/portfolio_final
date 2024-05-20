import { Card, CardHeader, CardBody, Divider, CardFooter, Link } from '@nextui-org/react';
import Image from 'next/image'
import React, { FC } from 'react'

interface Props {
    projectData: projectType,

}

interface projectType {
    id: number;
    title: string;
    urlProject: string;
    photoUrl: string;
}

const Project: FC<Props> = ({
    projectData
}) => {
    return (

        <Card className="py-4 ">

            <CardBody className="overflow-visible py-2 flex flex-col justify-center items-center">
                <p className="text-lg uppercase font-bold">
                    {projectData.title}
                </p>
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={projectData.photoUrl}
                    width={270}
                    height={280}
                />
            </CardBody>
            <Divider />
            <CardFooter className='flex items-center justify-center' >
                <Link
                    
                    isExternal
                    showAnchorIcon
                    href="https://github.com/nextui-org/nextui"
                >
                    Visit source code on GitHub.
                </Link>
            </CardFooter>
        </Card>
    )
}

export default Project