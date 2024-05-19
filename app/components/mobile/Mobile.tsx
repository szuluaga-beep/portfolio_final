
import Image from 'next/image';
import mobileSVG from '../../../public/images/movile.svg'
import { FC } from 'react';

interface Props {
    style: string
}

const MobilePicture: FC<Props> = ({ style }) => {
    return (
        <Image
            className={style}
            src={mobileSVG}
            alt='Mobile picture'
            
        />
    );
};

export default MobilePicture;