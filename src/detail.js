/**
 * @format
 * @flow strict
 */

import * as React from "react";
import { stringToElement } from "./element";
import "./detail.css";

type AffinityPercentagePropsType = {|
  percentage: "25" | "50" | "100" | "200" | "400"
|};

function AffinityPercentage(props: AffinityPercentagePropsType) {
  return <span className="affinity_percentage">{props.percentage}%</span>;
}

const Detail = () => {
  return (
    <article className="detail">
      <h1 className="title">Bulbasaur</h1>
      <div className="types">
        {stringToElement("grass")} {stringToElement("poison")}
      </div>
      <section>
        <h2 className="subtitle">Damage Taken</h2>
        <div className="affinities">
          {stringToElement("bug")}
          <AffinityPercentage percentage="100" />
          <AffinityPercentage percentage="100" />
          {stringToElement("dark")}
          {stringToElement("dragon")}
          <AffinityPercentage percentage="100" />
          <AffinityPercentage percentage="50" />
          {stringToElement("electric")}
          {stringToElement("fairy")}
          <AffinityPercentage percentage="50" />
          <AffinityPercentage percentage="50" />
          {stringToElement("fighting")}
          {stringToElement("fire")}
          <AffinityPercentage percentage="200" />
          <AffinityPercentage percentage="200" />
          {stringToElement("flying")}
          {stringToElement("ghost")}
          <AffinityPercentage percentage="100" />
          <AffinityPercentage percentage="50" />
          {stringToElement("grass")}
          {stringToElement("ground")}
          <AffinityPercentage percentage="100" />
          <AffinityPercentage percentage="200" />
          {stringToElement("ice")}
          {stringToElement("normal")}
          <AffinityPercentage percentage="100" />
          <AffinityPercentage percentage="100" />
          {stringToElement("poison")}
          {stringToElement("psychic")}
          <AffinityPercentage percentage="200" />
          <AffinityPercentage percentage="100" />
          {stringToElement("rock")}
          {stringToElement("steel")}
          <AffinityPercentage percentage="100" />
          <AffinityPercentage percentage="50" />
          {stringToElement("water")}
        </div>
      </section>
    </article>
  );
};
export default Detail;
