import React, { Component, Fragment } from 'react'
import { SettingsStyle } from '../../styled/Settings';
// import { NavLink } from "react-router-dom";
import { Container } from "semantic-ui-react"
import { settingIcon } from "../../utils/Icon"
import history from '../../../history'
// import { Link,Router } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Settings extends Component {
    constructor(props) {
        super()

    }
    render() {
        return (
            <Fragment>
                <SettingsStyle>
                    <Container className="container-box">
                        <div className="gen-box">
                            <h1>GENERAL SETTINGS</h1>
                        </div>
                        <div className="icon-box">
                            <i className={`${settingIcon[0]} setting-icon`} ><h2>users</h2></i>
                        </div>
                        <div className="icon-box">
                            <i className={`${settingIcon[1]} setting-icon`} ><h2>Tags</h2></i>
                        </div>
                        <div className="icon-box">
                            <i className={`${settingIcon[2]} setting-icon`} onClick={()=>history.push('/dialogue')}><h2>Dialogues</h2></i>
                        </div>
                        <div className="icon-box">
                            <i className={`${settingIcon[3]} setting-icon`} ><h2>Intents</h2></i>
                        </div>
                        <div className="icon-box">
                            <i className={`${settingIcon[4]} setting-icon`} ><h2>Carriers</h2></i>
                        </div>
                        <div className="icon-box">
                            <i className={`${settingIcon[5]} setting-icon`} ><h2>import histories</h2></i>
                        </div>
                        <div className="icon-box">
                            <i className={`${settingIcon[6]} setting-icon`} ><h2>Permission</h2></i>
                        </div>
                    </Container>
                </SettingsStyle>
            </Fragment>
        )
    }
}
export default (withRouter(Settings))