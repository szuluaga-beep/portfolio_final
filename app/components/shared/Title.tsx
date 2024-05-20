import React, { FC } from 'react'

interface Props {
    title: string

}
const Title: FC<Props> = ({ title }) => {
    return (
        <>
            <h2 className='text-4xl font-bold mb-3'>
                {title}
            </h2>
        </>
    )
}

export default Title