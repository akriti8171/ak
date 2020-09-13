import React, { Component, Fragment } from 'react'
import { NavBarStyle } from '../../styled/NavBar';
// import { NavLink } from "react-router-dom";
// import { Menu } from "semantic-ui-react"

class NavBar extends Component {

    render() {
        console.log(this.props, 'this')
        const { pageType } = this.props
        // console.log(pageType, 'pageType')
         const pageName=   (!pageType) ? " Dashboard" : pageType
        return (
            <Fragment>
                <NavBarStyle>
                    <div className="Nav-bar">
                        <h2>{pageName}</h2>
                        <h1>Admin</h1>
                        <i className=" large user circle icon admin-icon"></i>
                        <i className=" large dropdown circle icon dropdown-icon"></i>
                    </div>
                </NavBarStyle>
            </Fragment>

        )
    }
}
export default NavBar