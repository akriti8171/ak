import React, { Fragment } from "react";
import Dialogue from "../components/common/Dialogue"; 
const dialogue = props => {
    console.log('page is also calling ')
    document.title = "Setting Dialogues";
    return (
        <Fragment>
            <Dialogue />
        </Fragment>
    );
};
export default dialogue;
