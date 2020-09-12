import React, { Fragment } from "react";
import HomePage from "../components/HomePage";
const homePage = props => {
    console.log('page is also calling ')
    document.title = "Home Page";
    return (
        <Fragment>
            <HomePage />
        </Fragment>
    );
};
export default homePage;
