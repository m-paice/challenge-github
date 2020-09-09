import React from "react";

import { useHistory } from "react-router-dom";

// styles
import {
    Container,
    Nav,
    BackButton,
    Avatar,
    WrapperActions,
    Actions,
    EmailText,
    WrapperRepos,
    Repos,
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
            <Avatar />
            <WrapperActions>
                <Actions> 5 followers </Actions>
                <Actions> 2 following </Actions>
                <Actions> 20 stars </Actions>
            </WrapperActions>
            <EmailText> aarongroves@gmail.com </EmailText>

            <WrapperRepos>
                <Repos>
                    <h1> giocanvas </h1>
                    <p> Forked from ajstarks/giocanvas </p>
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
                </Repos>

                <Repos>
                    <h1> giocanvas </h1>
                    <p> Forked from ajstarks/giocanvas </p>
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
                </Repos>

                <Repos>
                    <h1> giocanvas </h1>
                    <p> Forked from ajstarks/giocanvas </p>
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
                </Repos>
            </WrapperRepos>
        </Container>
    );
};

export default UserShow;
