import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import "bootstrap/dist/css/bootstrap.min.css";

// Middlewares
import reduxThunk from "redux-thunk";
import promise from "redux-promise";
import { logger } from "redux-logger";
import { axiosAuthMiddleware } from "./middleware/axios-middleware";

// Components
import AppLayout from "./components/Application/AppLayout";
import Dashboard from "./components/Admin/Dashboard";

import Routes from "./config/routes";
import CreatePost from "./components/Admin/CreatePost";
import rootReducer from "./reducers";
import createPost from "./reducers/create-post";

const createStoreWithMiddleware = applyMiddleware(promise, logger)(
  createStore
);

// const createStoreWithMiddleware = applyMiddleware(promise, reduxThunk, logger)(
//   createStore
// );

const store = createStoreWithMiddleware(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const store = createStore(createPost);

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path={Routes.home} component={AppLayout} />

        {/* Dashboard Routes */}
        <Route exact path={Routes.admin} component={Dashboard} />
        <Route exact path={Routes.createpost} component={Dashboard} />
      </Switch>
    </Router>
  </Provider>,
  document.querySelector(".container")
);
