import React from "react";

interface Props {}

import "./style.css";

const Loading: React.FC<Props> = (props) => {
    return (
        <div className="wrapper-loading">
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loading;
