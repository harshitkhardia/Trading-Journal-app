import React, { Component } from "react";
import { render } from "react-dom";
import DashBoard from "./DashBoard";
import HomePage from "./HomePage";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <DashBoard />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");

