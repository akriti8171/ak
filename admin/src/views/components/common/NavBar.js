import React, { Component } from 'react'
import { NavBarStyle } from '../../styled/NavBar';
// import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react"

class NavBar extends Component {
    render() {
        return (
            <NavBarStyle>
                <Menu>
                    <Menu.item
                        name='admin'
                        active={activeItem === 'admin'}
                        onClick={}
                    >

                    </Menu.item>
                </Menu>

            </NavBarStyle>
        )
    }
}
export default NavBar