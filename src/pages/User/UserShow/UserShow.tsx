import React from "react";

import { useHistory } from "react-router-dom";

// components
import Card from "../../../components/Card";
import Item from "../../../components/Item";
import Avatar from "../../../components/Avatar";

// styles
import {
    Container,
    Nav,
    BackButton,
    WrapperActions,
    Actions,
    EmailText,
    Title,
    Subtitle,
    WrapperDetails,
    WrapperDetailsMobile,
    GroupDetails,
    Details,
    ColorIcon,
} from "./style";

// assets
import ArrowLeftIcon from "../../../assets/arrow-left.svg";
import StarIcon from "../../../assets/star.svg";

interface Props {}

const UserShow: React.FC<Props> = (props) => {
    const history = useHistory();

    return (
        <Container>
            <Nav>
                <BackButton onClick={() => history.push("/users")}>
                    <img src={ArrowLeftIcon} alt="arrow-left" />
                </BackButton>
            </Nav>
            <Avatar className="lg" />
            <WrapperActions>
                <Actions> 5 followers </Actions>
                <Actions> 2 following </Actions>
                <Actions> 20 stars </Actions>
            </WrapperActions>
            <EmailText> aarongroves@gmail.com </EmailText>

            <Card>
                <Item>
                    <Title> giocanvas </Title>
                    <Subtitle> Forked from ajstarks/giocanvas </Subtitle>
                    <WrapperDetails>
                        <Details>
                            <img src={StarIcon} alt="star" /> 26
                        </Details>
                        <Details>
                            <ColorIcon /> Go
                        </Details>
                        <Details> Updated on 22 Jun </Details>
                    </WrapperDetails>

                    <WrapperDetailsMobile>
                        <GroupDetails>
                            <Details>
                                <img src={StarIcon} alt="star" /> 26
                            </Details>
                            <Details>
                                <ColorIcon /> Go
                            </Details>
                        </GroupDetails>
                        <Details> Updated on 22 Jun </Details>
                    </WrapperDetailsMobile>
                </Item>

                <Item>
                    <Title> giocanvas </Title>
                    <Subtitle> Forked from ajstarks/giocanvas </Subtitle>
                    <WrapperDetails>
                        <Details>
                            <img src={StarIcon} alt="star" /> 26
                        </Details>
                        <Details>
                            <ColorIcon /> Go
                        </Details>
                        <Details> Updated on 22 Jun </Details>
                    </WrapperDetails>

                    <WrapperDetailsMobile>
                        <GroupDetails>
                            <Details>
                                <img src={StarIcon} alt="star" /> 26
                            </Details>
                            <Details>
                                <ColorIcon /> Go
                            </Details>
                        </GroupDetails>
                        <Details> Updated on 22 Jun </Details>
                    </WrapperDetailsMobile>
                </Item>

                <Item>
                    <Title> giocanvas </Title>
                    <Subtitle> Forked from ajstarks/giocanvas </Subtitle>
                    <WrapperDetails>
                        <Details>
                            <img src={StarIcon} alt="star" /> 26
                        </Details>
                        <Details>
                            <ColorIcon /> Go
                        </Details>
                        <Details> Updated on 22 Jun </Details>
                    </WrapperDetails>

                    <WrapperDetailsMobile>
                        <GroupDetails>
                            <Details>
                                <img src={StarIcon} alt="star" /> 26
                            </Details>
                            <Details>
                                <ColorIcon /> Go
                            </Details>
                        </GroupDetails>
                        <Details> Updated on 22 Jun </Details>
                    </WrapperDetailsMobile>
                </Item>
            </Card>
        </Container>
    );
};

export default UserShow;
