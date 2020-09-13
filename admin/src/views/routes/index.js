import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import homePage from '../pages/homePage'
import FlexDirection from "../styled/FlexDirection";
import DashBoard from '../pages/dashboard'
class App extends Component {
    state = {
        loading: true
    };
    componentDidMount() {

    }
    render() {
        // console.log('application started',this.state.loading)
        // if (this.state.loading) return null;
        // console.log('what happen')
        return (
            <FlexDirection>
                <Switch>
                    <Route  path="/mark" component={homePage} />
                    <Route path ="/dashboard" component={DashBoard}/>
                </Switch>   
            </FlexDirection>
        );
    }
}

export default App;
