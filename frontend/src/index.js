import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import "bootstrap/dist/css/bootstrap.min.css";

// Components
import AppLayout from "./components/Application/AppLayout";
import Dashboard from "./components/Admin/Dashboard";

import reducers from "./reducers";
import Routes from "./config/routes";
import CreatePost from "./components/Admin/CreatePost";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <Switch>
        <Route exact path={Routes.home} component={AppLayout} />

        <Route exact path={Routes.admin} component={Dashboard} />
        <Route exact path={Routes.createpost} component={CreatePost} />
      </Switch>
    </Router>
  </Provider>,
  document.querySelector(".container")
);
