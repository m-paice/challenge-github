import React from "react";

import { useHistory } from "react-router-dom";

// styles
import {
    Container,
    WrapperBox,
    Box,
    Input,
    UserContent,
    Avatar,
    Labels,
    Name,
    Description,
    Info,
    InfoMobile,
    WrapperActions,
    Stars,
    Language,
    IconLanguage,
    LastUpdated,
} from "./style";

// assets
import SearchIcon from "../../../assets/search.svg";
import StarIcon from "../../../assets/star.svg";

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

            <WrapperBox>
                <Box className="column">
                    <UserContent>
                        <Avatar />
                        <Labels>
                            <Name onClick={() => history.push("/users/1")}> rookii/paicehusk </Name>
                            <Description> Golang implementation of the Paice/Husk Stemming Algorithm </Description>
                            <Info>
                                <Stars>
                                    <img src={StarIcon} alt="start-icon" /> 26
                                </Stars>
                                <Language>
                                    <IconLanguage /> Go
                                </Language>
                                <LastUpdated>Updated on 16 Dec 2013</LastUpdated>
                            </Info>

                            <InfoMobile>
                                <WrapperActions>
                                    <Stars>
                                        <img src={StarIcon} alt="start-icon" /> 26
                                    </Stars>
                                    <Language>
                                        <IconLanguage /> Go
                                    </Language>
                                </WrapperActions>
                                <LastUpdated>Updated on 16 Dec 2013</LastUpdated>
                            </InfoMobile>
                        </Labels>
                    </UserContent>

                    <UserContent>
                        <Avatar />
                        <Labels>
                            <Name> rookii/paicehusk </Name>
                            <Description> Golang implementation of the Paice/Husk Stemming Algorithm </Description>
                            <Info>
                                <Stars>
                                    <img src={StarIcon} alt="start-icon" /> 26
                                </Stars>
                                <Language>
                                    <IconLanguage /> Go
                                </Language>
                                <LastUpdated>Updated on 16 Dec 2013</LastUpdated>
                            </Info>

                            <InfoMobile>
                                <WrapperActions>
                                    <Stars>
                                        <img src={StarIcon} alt="start-icon" /> 26
                                    </Stars>
                                    <Language>
                                        <IconLanguage /> Go
                                    </Language>
                                </WrapperActions>
                                <LastUpdated>Updated on 16 Dec 2013</LastUpdated>
                            </InfoMobile>
                        </Labels>
                    </UserContent>

                    <UserContent>
                        <Avatar />
                        <Labels>
                            <Name> rookii/paicehusk </Name>
                            <Description> Golang implementation of the Paice/Husk Stemming Algorithm </Description>
                            <Info>
                                <Stars>
                                    <img src={StarIcon} alt="start-icon" /> 26
                                </Stars>
                                <Language>
                                    <IconLanguage /> Go
                                </Language>
                                <LastUpdated>Updated on 16 Dec 2013</LastUpdated>
                            </Info>
                            <InfoMobile>
                                <WrapperActions>
                                    <Stars>
                                        <img src={StarIcon} alt="start-icon" /> 26
                                    </Stars>
                                    <Language>
                                        <IconLanguage /> Go
                                    </Language>
                                </WrapperActions>
                                <LastUpdated>Updated on 16 Dec 2013</LastUpdated>
                            </InfoMobile>
                        </Labels>
                    </UserContent>

                    <UserContent>
                        <Avatar />
                        <Labels>
                            <Name> rookii/paicehusk </Name>
                            <Description> Golang implementation of the Paice/Husk Stemming Algorithm </Description>
                            <Info>
                                <Stars>
                                    <img src={StarIcon} alt="start-icon" /> 26
                                </Stars>
                                <Language>
                                    <IconLanguage /> Go
                                </Language>
                                <LastUpdated>Updated on 16 Dec 2013</LastUpdated>
                            </Info>
                            <InfoMobile>
                                <WrapperActions>
                                    <Stars>
                                        <img src={StarIcon} alt="start-icon" /> 26
                                    </Stars>
                                    <Language>
                                        <IconLanguage /> Go
                                    </Language>
                                </WrapperActions>
                                <LastUpdated>Updated on 16 Dec 2013</LastUpdated>
                            </InfoMobile>
                        </Labels>
                    </UserContent>

                    <UserContent>
                        <Avatar />
                        <Labels>
                            <Name> rookii/paicehusk </Name>
                            <Description> Golang implementation of the Paice/Husk Stemming Algorithm </Description>
                            <Info>
                                <Stars>
                                    <img src={StarIcon} alt="start-icon" /> 26
                                </Stars>
                                <Language>
                                    <IconLanguage /> Go
                                </Language>
                                <LastUpdated>Updated on 16 Dec 2013</LastUpdated>
                            </Info>
                            <InfoMobile>
                                <WrapperActions>
                                    <Stars>
                                        <img src={StarIcon} alt="start-icon" /> 26
                                    </Stars>
                                    <Language>
                                        <IconLanguage /> Go
                                    </Language>
                                </WrapperActions>
                                <LastUpdated>Updated on 16 Dec 2013</LastUpdated>
                            </InfoMobile>
                        </Labels>
                    </UserContent>

                    <UserContent>
                        <Avatar />
                        <Labels>
                            <Name> rookii/paicehusk </Name>
                            <Description> Golang implementation of the Paice/Husk Stemming Algorithm </Description>
                            <Info>
                                <Stars>
                                    <img src={StarIcon} alt="start-icon" /> 26
                                </Stars>
                                <Language>
                                    <IconLanguage /> Go
                                </Language>
                                <LastUpdated>Updated on 16 Dec 2013</LastUpdated>
                            </Info>
                            <InfoMobile>
                                <WrapperActions>
                                    <Stars>
                                        <img src={StarIcon} alt="start-icon" /> 26
                                    </Stars>
                                    <Language>
                                        <IconLanguage /> Go
                                    </Language>
                                </WrapperActions>
                                <LastUpdated>Updated on 16 Dec 2013</LastUpdated>
                            </InfoMobile>
                        </Labels>
                    </UserContent>

                    <UserContent>
                        <Avatar />
                        <Labels>
                            <Name> rookii/paicehusk </Name>
                            <Description> Golang implementation of the Paice/Husk Stemming Algorithm </Description>
                            <Info>
                                <Stars>
                                    <img src={StarIcon} alt="start-icon" /> 26
                                </Stars>
                                <Language>
                                    <IconLanguage /> Go
                                </Language>
                                <LastUpdated>Updated on 16 Dec 2013</LastUpdated>
                            </Info>
                            <InfoMobile>
                                <WrapperActions>
                                    <Stars>
                                        <img src={StarIcon} alt="start-icon" /> 26
                                    </Stars>
                                    <Language>
                                        <IconLanguage /> Go
                                    </Language>
                                </WrapperActions>
                                <LastUpdated>Updated on 16 Dec 2013</LastUpdated>
                            </InfoMobile>
                        </Labels>
                    </UserContent>

                    <UserContent>
                        <Avatar />
                        <Labels>
                            <Name> rookii/paicehusk </Name>
                            <Description> Golang implementation of the Paice/Husk Stemming Algorithm </Description>
                            <Info>
                                <Stars>
                                    <img src={StarIcon} alt="start-icon" /> 26
                                </Stars>
                                <Language>
                                    <IconLanguage /> Go
                                </Language>
                                <LastUpdated>Updated on 16 Dec 2013</LastUpdated>
                            </Info>
                            <InfoMobile>
                                <WrapperActions>
                                    <Stars>
                                        <img src={StarIcon} alt="start-icon" /> 26
                                    </Stars>
                                    <Language>
                                        <IconLanguage /> Go
                                    </Language>
                                </WrapperActions>
                                <LastUpdated>Updated on 16 Dec 2013</LastUpdated>
                            </InfoMobile>
                        </Labels>
                    </UserContent>

                    <UserContent>
                        <Avatar />
                        <Labels>
                            <Name> rookii/paicehusk </Name>
                            <Description> Golang implementation of the Paice/Husk Stemming Algorithm </Description>
                            <Info>
                                <Stars>
                                    <img src={StarIcon} alt="start-icon" /> 26
                                </Stars>
                                <Language>
                                    <IconLanguage /> Go
                                </Language>
                                <LastUpdated>Updated on 16 Dec 2013</LastUpdated>
                            </Info>
                            <InfoMobile>
                                <WrapperActions>
                                    <Stars>
                                        <img src={StarIcon} alt="start-icon" /> 26
                                    </Stars>
                                    <Language>
                                        <IconLanguage /> Go
                                    </Language>
                                </WrapperActions>
                                <LastUpdated>Updated on 16 Dec 2013</LastUpdated>
                            </InfoMobile>
                        </Labels>
                    </UserContent>

                    <UserContent>
                        <Avatar />
                        <Labels>
                            <Name> rookii/paicehusk </Name>
                            <Description> Golang implementation of the Paice/Husk Stemming Algorithm </Description>
                            <Info>
                                <Stars>
                                    <img src={StarIcon} alt="start-icon" /> 26
                                </Stars>
                                <Language>
                                    <IconLanguage /> Go
                                </Language>
                                <LastUpdated>Updated on 16 Dec 2013</LastUpdated>
                            </Info>
                            <InfoMobile>
                                <WrapperActions>
                                    <Stars>
                                        <img src={StarIcon} alt="start-icon" /> 26
                                    </Stars>
                                    <Language>
                                        <IconLanguage /> Go
                                    </Language>
                                </WrapperActions>
                                <LastUpdated>Updated on 16 Dec 2013</LastUpdated>
                            </InfoMobile>
                        </Labels>
                    </UserContent>
                </Box>
            </WrapperBox>
        </Container>
    );
};

export default UserIndex;
