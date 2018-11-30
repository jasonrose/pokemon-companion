/**
 * @format
 * @flow strict
 */

import * as React from "react";
import { Element, elements } from "./element";
import pokemon, { type AffinityPercentageType } from "./pokemon";
import {
  Redirect,
  type RouterHistory,
  type Location,
  type Match
} from "react-router-dom";
import "./detail.css";

type AffinityPercentagePropsType = {|
  percentage: AffinityPercentageType
|};

function AffinityPercentage(props: AffinityPercentagePropsType) {
  return <span className="affinity_percentage">{props.percentage}%</span>;
}

type DetailPropsType = {|
  history: RouterHistory,
  location: Location,
  match: Match
|};

const Detail = (props: DetailPropsType) => {
  let number = props.match.params.number;
  if (number == null) {
    // return <Redirect to="/" />;
    number = "1";
  }
  const entry = pokemon[number];
  if (entry == null) {
    return <Redirect to="/" />;
  }
  return (
    <article className="detail">
      <h1 className="title">{entry.name}</h1>
      <div className="types">
        {entry.types.map(element => (
          <Element element={element} key={element} />
        ))}
      </div>
      <section>
        <h2 className="subtitle">Damage Taken</h2>
        <div className="affinities">
          {elements.map((element, i) => {
            const affinity =
              entry.affinities[element] == null
                ? "100"
                : entry.affinities[element];
            return i % 2 === 0 ? (
              <React.Fragment key={element}>
                <Element element={element} />
                <AffinityPercentage percentage={affinity} />
              </React.Fragment>
            ) : (
              <React.Fragment key={element}>
                <AffinityPercentage percentage={affinity} />
                <Element element={element} />
              </React.Fragment>
            );
          })}
        </div>
      </section>
    </article>
  );
};
export default Detail;
