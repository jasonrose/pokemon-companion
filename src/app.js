/**
 * @format
 * @flow strict
 */

import Detail from "./detail";
import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Search from "./search";
import "css-reset-and-normalize/css/reset-and-normalize.css";
import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/pokemon/:number" component={Detail} />
        <Route path="/" component={Search} />
      </Switch>
    </div>
  );
};
export default App;
