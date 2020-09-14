import React, { useEffect } from "react";

import { useHistory, useParams } from "react-router-dom";

// components
import Card from "../../../components/Card";
import Item from "../../../components/Item";
import Avatar from "../../../components/Avatar";

// service
import { useUsers, useRepos } from "../../../contexts";

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
    WrapperForm,
    WrapperSearch,
    TextNoResult,
} from "./style";

// assets
import ArrowLeftIcon from "../../../assets/arrow-left.svg";
import StarIcon from "../../../assets/star.svg";
import SearchIcon from "../../../assets/search.svg";

interface Props {}

const UserShow: React.FC<Props> = (props) => {
    const history = useHistory();
    const { id } = useParams();

    const { handleGetUser, currentUser } = useUsers();
    const { handleListRepos, repos, handleSortListRepos, handleSearchRepo, tempRepos } = useRepos();

    useEffect(() => {
        handleGetUser(id);
        handleListRepos(id);
    }, []);

    const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        handleSortListRepos(event.target.value);
    };

    const handleChangeRepos = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleSearchRepo(event.target.value);
    };

    return (
        <Container>
            <Nav>
                <BackButton onClick={() => history.push("/users")}>
                    <img src={ArrowLeftIcon} alt="arrow-left" />
                </BackButton>
            </Nav>
            <Avatar className="lg" path={currentUser.avatar_url} />
            <WrapperActions>
                <Actions> {currentUser.followers} followers </Actions>
                <Actions> {currentUser.following} following </Actions>
                <Actions> 20 stars </Actions>
            </WrapperActions>
            <EmailText> {currentUser.email || currentUser.bio} </EmailText>

            <Card>
                <WrapperForm>
                    <WrapperSearch>
                        <img src={SearchIcon} alt="search-icon" />
                        <input placeholder="type a repo from user..." onChange={handleChangeRepos} />
                    </WrapperSearch>
                    <select name="" id="" onChange={handleChangeSelect}>
                        <option value="none">none</option>
                        <option value="DESC"> decreasing </option>
                        <option value="ASC"> growing </option>
                    </select>
                </WrapperForm>
                {(tempRepos.length ? tempRepos : repos).map((repo) => (
                    <Item key={repo.id}>
                        <Title> {repo.name} </Title>
                        <Subtitle> {repo.description} </Subtitle>
                        <WrapperDetails>
                            <Details>
                                <img src={StarIcon} alt="star" /> {repo.stargazers_count}
                            </Details>
                            <Details>
                                <ColorIcon /> {repo.language}
                            </Details>
                            <Details> {repo.updated_at} </Details>
                        </WrapperDetails>

                        <WrapperDetailsMobile>
                            <GroupDetails>
                                <Details>
                                    <img src={StarIcon} alt="star" /> {repo.stargazers_count}
                                </Details>
                                <Details>
                                    <ColorIcon /> {repo.language}
                                </Details>
                            </GroupDetails>
                            <Details> {repo.updated_at} </Details>
                        </WrapperDetailsMobile>
                    </Item>
                ))}

                {!repos.length && <TextNoResult>no results found</TextNoResult>}
            </Card>
        </Container>
    );
};

export default UserShow;
