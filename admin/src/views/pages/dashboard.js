import React, { Fragment } from "react";
import DashBoard from "../components/DashBoard";
const dashBoard = props => {
    console.log('page is also calling ')
    document.title = "Home Page";
    return (
        <Fragment>
            <DashBoard />
        </Fragment>
    );
};
export default dashBoard;
