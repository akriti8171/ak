import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import store from "./state/store";
import history from "./history";

//import the minified CSS file in your app's entry file:
import "semantic-ui-css/semantic.min.css";

import "./index.css";
import App from "./views/routes";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
