import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import 'bootstrap/dist/css/bootstrap.min.css';


import AppLayout from "./components/AppLayout";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
   <AppLayout />
  </Provider>,
  document.querySelector(".container")
);
