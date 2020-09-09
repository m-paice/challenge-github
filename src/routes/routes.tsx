import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Home from "../pages/Home";
import { UserIndex, UserShow } from "../pages/User";
import { RepoIndex, RepoShow } from "../pages/Repo";

interface Props {}

const Routes: React.FC<Props> = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/users" component={UserIndex} />
                <Route path="/users/:id" component={UserShow} />
                <Route exact path="/repos" component={RepoIndex} />
                <Route path="/repos/:id" component={RepoShow} />
            </Switch>
        </Router>
    );
};

export default Routes;
