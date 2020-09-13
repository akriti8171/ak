import React, { Component, Fragment } from 'react'
import { SideBarStyle } from '../../styled/SideBar';
import { sideBarIcon } from '../../utils/sideBarIcon'

class SideBar extends Component {
    render() {
        console.log('side bar Icon ', sideBarIcon)
        return (
            <Fragment>
                <SideBarStyle>
                    <div className='side-bar'>
                        <i className={`${sideBarIcon[0]} main-icon`} ></i>
                        <i className={`${sideBarIcon[1]} main-icon`} ></i>
                        <i className={`${sideBarIcon[2]} main-icon`} ></i>
                        <i className={`${sideBarIcon[3]} main-icon`} ></i>
                        <i className={`${sideBarIcon[4]} main-icon`} ></i>
                        <i className={`${sideBarIcon[5]} main-icon`} ></i>
                        <i className={`${sideBarIcon[6]} main-icon`} ></i>
                        <i className={`${sideBarIcon[7]} trash-icon`} ></i>
                    </div>
                </SideBarStyle>
            </Fragment>
        )
    }
}
export default SideBar
