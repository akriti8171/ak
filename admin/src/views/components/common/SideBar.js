import React, { Component, Fragment } from 'react'
import { SideBarStyle } from '../../styled/SideBar';
import { sideBarIcon } from '../../utils/Icon'
import NavBar from './NavBar';
import Settings from './Settings'
import { withRouter } from 'react-router-dom';

class SideBar extends Component {
    constructor() {
        super();
        this.state = { hide: false }
        this.toggle = this.toggle.bind(this)
    }
    toggle(hideValue) {
        const hide = this.state.hide
        console.log('hidevalue', hideValue, hide)
        if (hideValue === hide) {
            this.setState({hide:!this.state.hide})
        }
    }
    render() {
        const {hide} = this.state;
        console.log('side bar Icon ', sideBarIcon, hide)
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
                        <i className={`${sideBarIcon[6]} main-icon`} onClick={()=>this.toggle(hide)} ></i>
                        <i className={`${sideBarIcon[7]} trash-icon`} ></i>
                    </div>
                    {hide && <Settings/>}
                    {hide && <NavBar pageType='settings'/>}
                </SideBarStyle>
            </Fragment>
        )
    }
}
export default withRouter(SideBar)
