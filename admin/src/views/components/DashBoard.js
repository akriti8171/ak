import React, { Component } from "react";
// import dashBoard from "../pages/dashboard";
import StyledHeaderBasic from "../styled/Header";
import SideBar from "./common/SideBar"
import NavBar from "./common/NavBar"

class Dashboard extends Component {
  render() {
    console.log('dahsiboard')
    return (
      <StyledHeaderBasic >
          <NavBar/>
          <SideBar/>
      </StyledHeaderBasic>
    );
  }
}

export default Dashboard;
