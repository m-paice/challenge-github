import React from "react";

// styled
import { AvatarIcon } from "./style";

interface Props {
    className: string;
}

const Avatar: React.FC<Props> = ({ ...rest }) => {
    return <AvatarIcon {...rest}></AvatarIcon>;
};

export default Avatar;
