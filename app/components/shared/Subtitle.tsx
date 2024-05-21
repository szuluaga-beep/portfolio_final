import React, { FC } from 'react'

interface Props {
    text: string;
}

const Subtitle: FC<Props> = ({ text }) => {
    return (
        <h2 className='text-3xl font-semibold mb-3'>
            {
                text
            }
        </h2>
    )
}

export default Subtitle