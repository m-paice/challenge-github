import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Home from "../pages/Home";
import { UserIndex, UserShow } from "../pages/User";

interface Props {}

const Routes: React.FC<Props> = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/users" component={UserIndex} />
                <Route exact path="/users/:id" component={UserShow} />
            </Switch>
        </Router>
    );
};

export default Routes;
