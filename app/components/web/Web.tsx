import { FC } from "react";
import Image from "next/image";
import WebPic from '../../../public/images/web.svg'

interface Props {
    style: string
}

const WebPicture: FC<Props> = ({ style }) => {
    return (
        <Image
            className={style}
            alt="Web picture"
            src={WebPic}
        />
    );
};

export default WebPicture;