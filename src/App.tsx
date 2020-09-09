import React from "react";

// pages
import Routes from "./routes";

import "./styles/GlobalStyles.scss";

interface Props {}

const App: React.FC<Props> = (props) => {
    return <Routes />;
};

export default App;
