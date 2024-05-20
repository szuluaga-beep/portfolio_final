'use client'
import { CheckIcon } from '@heroicons/react/16/solid';
import { Card, CardHeader, CardBody, Divider, CardFooter, Link, Chip } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import Image from 'next/image'
import React, { FC } from 'react'

interface Props {
    projectData: projectType,

}

interface projectType {
    id: number;
    title: string;
    urlProject?: string;
    photoUrl: string;
    url?: string;
}

const Project: FC<Props> = ({
    projectData
}) => {

    const { theme } = useTheme()
    return (

        <Card className={`${theme === 'light' && 'bg-gray-300'} p-4`}>

            <CardBody className="overflow-visible py-2 flex flex-col justify-center items-center">

                <Chip
                    className='mb-3 text-base'
                    startContent={<CheckIcon className='size-3' />}
                    variant="faded"
                    color={`${theme === 'light' ? 'primary':'success'}`}
                >
                    {
                        projectData.title
                    }
                </Chip>
                <Image
                    alt="Card background"
                    className="rounded-xl object-cover"
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
                    href={`${projectData.url !== null ? projectData.url! : projectData.urlProject}`}
                >
                    Visit
                </Link>
            </CardFooter>
        </Card>
    )
}

export default Project