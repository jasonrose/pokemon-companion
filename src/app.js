/**
 * @format
 * @flow strict
 */

import Detail from "./detail";
import * as React from "react";
import { Route, Switch } from "react-router-dom";
import "css-reset-and-normalize/css/reset-and-normalize.css";
import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/pokemon/:id" component={Detail} />
        <Route path="/" component={Detail} />
      </Switch>
    </div>
  );
};
export default App;
