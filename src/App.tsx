import React from "react";

// pages
import Routes from "./routes";

// contexts
import { ReposProvider, UsersProvider } from "./contexts";

import GlobalStyles from "./styles/GlobalStyles";

interface Props {}

const App: React.FC<Props> = (props) => {
    return (
        <>
            <ReposProvider>
                <UsersProvider>
                    <Routes />

                    <GlobalStyles />
                </UsersProvider>
            </ReposProvider>
        </>
    );
};

export default App;
