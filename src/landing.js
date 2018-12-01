/**
 * @format
 * @flow strict
 */

import * as React from "react";
import {
  type RouterHistory,
  type Location,
  type Match
} from "react-router-dom";
import Search from "./search";

type LandingPropsType = {|
  history: RouterHistory
|};

const Landing: React.StatelessFunctionalComponent<LandingPropsType> = (
  props: LandingPropsType
) => {
  return (
    <>
      <h1 className="title">Poké Companion</h1>
      <Search history={props.history} />
    </>
  );
};

export default Landing;
