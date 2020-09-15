import React from "react";

import { useHistory } from "react-router-dom";

// styles
import { Container, Title, WrapperBox, Box } from "./styles";

interface Props {}

const Home: React.FC<Props> = (props) => {
    const history = useHistory();

    return (
        <Container>
            <Title> Welcome, get user and repo from github </Title>

            <WrapperBox>
                <Box onClick={() => history.push("/users")}> Go to user </Box>
                <Box> Go to repo </Box>
            </WrapperBox>
        </Container>
    );
};

export default Home;
