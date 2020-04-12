import React, { useState } from "react";
const WrapperLogin = (props) => {

    return (
        <div className="wrapper-login row">
            <div className="col">
            {props.children}
            </div>
            <div className="col login-image"></div>
        </div>
    );
};

export default WrapperLogin;