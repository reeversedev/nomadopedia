import React, { Component } from "react";
import Header from "./Header";
import Home from "./Home";

// import "bootstrap/dist/css/bootstrap.min.css";

class AppLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}
export default AppLayout;
