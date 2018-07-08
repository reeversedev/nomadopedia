import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import AppLayout from "./Components/AppLayout";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

ReactDOM.render(<AppLayout />, document.getElementById("root"));
registerServiceWorker();
