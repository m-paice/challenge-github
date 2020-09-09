import React from "react";

import { useHistory } from "react-router-dom";

interface Props {}

const Home: React.FC<Props> = (props) => {
    const history = useHistory();

    return (
        <div>
            <h1> welcome, get user and repo from github </h1>

            <div onClick={() => history.push("/users")}> Go to user </div>
            <div onClick={() => history.push("/repos")}> Go to repo </div>
        </div>
    );
};

export default Home;
