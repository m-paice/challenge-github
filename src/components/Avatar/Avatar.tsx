import React from "react";

// styled
import { AvatarIcon } from "./style";

interface Props {
    className: string;
    path?: string;
}

const Avatar: React.FC<Props> = ({ ...rest }) => {
    return <AvatarIcon src={rest.path} {...rest}></AvatarIcon>;
};

export default Avatar;
