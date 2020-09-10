import React from "react";

import { useHistory } from "react-router-dom";

// components
import Card from "../../../components/Card";
import Item from "../../../components/Item";
import Avatar from "../../../components/Avatar";

// styles
import { Container, WrapperBox, Box, Input, Info, Title, Description } from "./style";

// assets
import SearchIcon from "../../../assets/search.svg";

interface Props {}

const UserIndex: React.FC<Props> = (props) => {
    const history = useHistory();

    return (
        <Container>
            <WrapperBox>
                <Box>
                    <img src={SearchIcon} alt="search-icon" />
                    <Input placeholder="type name user from github..." />
                </Box>
            </WrapperBox>

            <Card>
                <Item className="d-flex">
                    <Avatar className="sm"></Avatar>

                    <Info>
                        <Title onClick={() => history.push("/users/1")}>
                            Matheus Paice
                            <span> #Matheus Paice Oliveira Ferreira </span>
                        </Title>
                        <Description>
                            I develop for @apple things Admin for @google Summer of Code @wwdc 2017 Scholarship Winner
                        </Description>

                        <span> Brasil / Bauru-SP </span>
                        <span> matheus.paice@gmail.com </span>
                    </Info>
                </Item>

                <Item className="d-flex">
                    <Avatar className="sm"></Avatar>

                    <Info>
                        <Title onClick={() => history.push("/users/1")}>
                            Matheus Paice
                            <span> #Matheus Paice Oliveira Ferreira </span>
                        </Title>
                        <Description>
                            I develop for @apple things Admin for @google Summer of Code @wwdc 2017 Scholarship Winner
                        </Description>

                        <span> Brasil / Bauru-SP </span>
                        <span> matheus.paice@gmail.com </span>
                    </Info>
                </Item>
                <Item className="d-flex">
                    <Avatar className="sm"></Avatar>

                    <Info>
                        <Title onClick={() => history.push("/users/1")}>
                            Matheus Paice
                            <span> #Matheus Paice Oliveira Ferreira </span>
                        </Title>
                        <Description>
                            I develop for @apple things Admin for @google Summer of Code @wwdc 2017 Scholarship Winner
                        </Description>

                        <span> Brasil / Bauru-SP </span>
                        <span> matheus.paice@gmail.com </span>
                    </Info>
                </Item>
                <Item className="d-flex">
                    <Avatar className="sm"></Avatar>

                    <Info>
                        <Title onClick={() => history.push("/users/1")}>
                            Matheus Paice
                            <span> #Matheus Paice Oliveira Ferreira </span>
                        </Title>
                        <Description>
                            I develop for @apple things Admin for @google Summer of Code @wwdc 2017 Scholarship Winner
                        </Description>

                        <span> Brasil / Bauru-SP </span>
                        <span> matheus.paice@gmail.com </span>
                    </Info>
                </Item>
                <Item className="d-flex">
                    <Avatar className="sm"></Avatar>

                    <Info>
                        <Title onClick={() => history.push("/users/1")}>
                            Matheus Paice
                            <span> #Matheus Paice Oliveira Ferreira </span>
                        </Title>
                        <Description>
                            I develop for @apple things Admin for @google Summer of Code @wwdc 2017 Scholarship Winner
                        </Description>

                        <span> Brasil / Bauru-SP </span>
                        <span> matheus.paice@gmail.com </span>
                    </Info>
                </Item>
            </Card>
        </Container>
    );
};

export default UserIndex;
