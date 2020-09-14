import React, { Component } from "react";
import StyledHeaderBasic from "../styled/DashBoard";
import { withRouter } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <StyledHeaderBasic >
          <div className='home'>
          </div>
      </StyledHeaderBasic>
    );
  }
}

export default withRouter(HomePage);
