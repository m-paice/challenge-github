import React from "react";

// style
import { Container } from "./style";

interface Props {}

const Card: React.FC<Props> = ({ children }) => {
    return <Container>{children}</Container>;
};

export default Card;
