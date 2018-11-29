/**
 * @format
 * @flow strict
 */
import App from "./app";
import nullthrows from "./nullthrows";
import * as React from "react";
import { HashRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  nullthrows(document.getElementById("app"))
);
