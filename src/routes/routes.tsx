import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

interface Props {}

const Routes: React.FC<Props> = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={() => <h1> OPa !! </h1>} />
            </Switch>
        </Router>
    );
};

export default Routes;
