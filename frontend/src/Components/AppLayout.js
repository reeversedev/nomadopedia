import React, { Component } from "react";
import Header from "../Components/Header";
import ImageSlider from "./ImageSlider";

export default class AppLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <ImageSlider />
      </div>
    );
  }
}
