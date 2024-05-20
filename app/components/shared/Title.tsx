import React, { FC } from 'react'

interface Props {
    title: string

}
const Title: FC<Props> = ({ title }) => {
    return (
        <>
            <h1 className='text-4xl font-bold mb-3'>
                {title}
            </h1>
        </>
    )
}

export default Title