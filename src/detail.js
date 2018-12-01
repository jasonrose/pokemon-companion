/**
 * @format
 * @flow strict
 */

import * as React from "react";
import { Element, elements } from "./element";
import pokemon, { type AffinityPercentageType } from "./pokemon";
import Helmet from "react-helmet";
import {
  Redirect,
  type RouterHistory,
  type Location,
  type Match
} from "react-router-dom";
import Search from "./search";
import "./detail.css";

type AffinityPercentagePropsType = {|
  percentage: AffinityPercentageType
|};

function AffinityPercentage(props: AffinityPercentagePropsType) {
  return (
    <span
      className={"affinity_percentage affinity_percentage_" + props.percentage}
    >
      {props.percentage}%
    </span>
  );
}

type DetailPropsType = {|
  history: RouterHistory,
  location: Location,
  match: Match
|};

const Detail = (props: DetailPropsType) => {
  let numberString = props.match.params.number;
  if (numberString == null) {
    return <Redirect to="/" />;
  }
  const number = parseInt(numberString, 10) - 1;
  const entry = pokemon[number];
  if (entry == null) {
    return <Redirect to="/" />;
  }
  const url = `https://jasonrose.github.io/pokemon-companion/#/${entry.number}`;
  return (
    <>
      <Helmet>
        <title>Pokémon Companion - {entry.name}</title>
        <link rel="canonical" href={url} />
        <meta property="og:url" content={url} />
        <meta
          property="og:description"
          content={`${entry.name} is a ${entry.types.join("/")}-type pokémon.`}
        />
      </Helmet>
      <header>
        <Search history={props.history} />
      </header>
      <article className="detail">
        <h1 className="title">{entry.name}</h1>
        <div className={"types types_" + entry.types.length}>
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
    </>
  );
};
export default Detail;
