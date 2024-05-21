import React, { FC } from 'react'

interface Props {
    text: string

}
const Title: FC<Props> = ({ text }) => {
    return (
        <>
            <h2 className='text-4xl font-bold mb-3'>
                {text}
            </h2>
        </>
    )
}

export default Title