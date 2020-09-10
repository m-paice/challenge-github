import React from "react";

// style
import { Container } from "./style";

interface Props {
    className?: string;
}

const Item: React.FC<Props> = ({ children, ...rest }) => {
    return <Container {...rest}>{children}</Container>;
};

export default Item;
