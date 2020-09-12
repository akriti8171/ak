import React, { Component } from "react";
import StyledHeaderBasic from "../styled/Header";

class HomePage extends Component {
  render() {
    return (
      <StyledHeaderBasic >
          <div className='home'>
          <h1 className="first">We just Created our first Component</h1>
          </div>
      </StyledHeaderBasic>
    );
  }
}

export default HomePage;
