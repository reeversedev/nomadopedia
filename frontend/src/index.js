import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import "bootstrap/dist/css/bootstrap.min.css";

import AppLayout from "./components/Application/AppLayout";

import reducers from "./reducers";
import Routes from "./config/routes";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <Switch>
        <Route exact path={Routes.home} component={AppLayout} />
      </Switch>
    </Router>
  </Provider>,
  document.querySelector(".container")
);
