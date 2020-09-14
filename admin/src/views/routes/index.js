import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import homePage from '../pages/homePage'
import FlexDirection from "../styled/FlexDirection";
import DashBoard from '../pages/dashboard'
import Dialogue from '../pages/Dialogue'
import history from '../../history'
class App extends Component {

    state = {
        loading: true
    };
    componentDidMount() {
        history.listen(({ action, location }) => {
            console.log(
                `The current URL is ${location.pathname}${location.search}${location.hash}`
            );
            console.log(`The last navigation action was ${action}`);
        });
    
    
    }

    render() {
        // console.log('application started',this.state.loading)
        // if (this.state.loading) return null;
        // console.log('what happen')
        return (
            <FlexDirection>
                <Router history={history}>
                    <Switch>
                        <Route path="/mark" component={homePage} />
                        <Route path="/dashboard" component={DashBoard} />
                        <Route path="/dialogue" component={Dialogue} />
                    </Switch>

                </Router>

            </FlexDirection>
        );
    }
}

export default App;
