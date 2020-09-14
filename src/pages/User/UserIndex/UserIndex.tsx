import React from "react";

import { useHistory } from "react-router-dom";

// components
import Card from "../../../components/Card";
import Item from "../../../components/Item";
import Avatar from "../../../components/Avatar";

// services
import { useUsers } from "../../../contexts";

// hooks
import { debounceEvent } from "../../../components/hooks/useDebounce";

// styles
import { Container, WrapperBox, Box, Input, Info, Title, Description, TextNoResult } from "./style";

// assets
import SearchIcon from "../../../assets/search.svg";

interface Props {}

const UserIndex: React.FC<Props> = (props) => {
    const history = useHistory();

    const { handleListUsers, users } = useUsers();

    const handleFetchUsers = debounceEvent((username: string) => {
        if (username) handleListUsers(username);
    }, 500);

    return (
        <Container>
            <WrapperBox>
                <Box>
                    <img src={SearchIcon} alt="search-icon" />
                    <Input
                        placeholder="type name user from github..."
                        onChange={(event) => handleFetchUsers(event.target.value)}
                    />
                </Box>
            </WrapperBox>

            <Card>
                {users.map((user) => (
                    <Item key={user.id} className="d-flex">
                        <Avatar className="sm" path={user.avatar_url}></Avatar>

                        <Info>
                            <Title onClick={() => history.push(`/users/${user.login}`)}>
                                {user.login}
                                <span> #{user.node_id} </span>
                            </Title>
                            <Description>
                                I develop for @apple things Admin for @google Summer of Code @wwdc 2017 Scholarship
                                Winner
                            </Description>

                            <span> {user.url} </span>
                        </Info>
                    </Item>
                ))}

                {!users.length && <TextNoResult>no results found</TextNoResult>}
            </Card>
        </Container>
    );
};

export default UserIndex;
