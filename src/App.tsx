import React from "react";

// pages
import Routes from "./routes";

import GlobalStyles from "./styles/GlobalStyles";

interface Props {}

const App: React.FC<Props> = (props) => {
    return (
        <>
            <Routes />

            <GlobalStyles />
        </>
    );
};

export default App;
