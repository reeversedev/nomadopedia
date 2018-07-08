import React, { Component } from "react";
import Header from "../Components/Header";
import Home from "./Home";

export default class AppLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}
