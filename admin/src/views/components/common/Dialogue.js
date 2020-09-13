import React, { Component } from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import { Container } from "semantic-ui-react"
import { DialoguesStyle } from "../../styled/Dialogues"
import {dialogueIcon} from "../../utils/Icon"
class Dialogue extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div>
                <DialoguesStyle>
                    <NavBar pageType="settings > dialogues" />
                    <SideBar />
                    <Container className="background-product">
                        <Container className="product">
                            <div className="header-bar">
                                <div className="add-dialogue">
                                    <i className={`${dialogueIcon} dialogue-icon`}></i>
                                    <h1>Add Dialogues</h1>
                                </div>
                            </div>
                        </Container>
                    </Container>

                </DialoguesStyle>

            </div>
        )
    }
}
export default Dialogue