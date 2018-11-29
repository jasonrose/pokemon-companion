/**
 * @format
 * @flow strict
 */

import * as React from "react";
import "./element.css";

type ElementType =
  | "bug"
  | "dark"
  | "dragon"
  | "electric"
  | "fairy"
  | "fighting"
  | "fire"
  | "flying"
  | "ghost"
  | "grass"
  | "ground"
  | "ice"
  | "normal"
  | "poison"
  | "psychic"
  | "rock"
  | "steel"
  | "water";

type ElementPropsType = {|
  color: string,
  element: ElementType
|};

class Element extends React.Component<ElementPropsType> {
  props: ElementPropsType;

  render() {
    return (
      <div className="element" style={{ backgroundColor: this.props.color }}>
        {this.props.element}
      </div>
    );
  }
}

export function stringToElement(element: ElementType) {
  switch (element) {
    case "bug":
      return <Element color="#ab2" element="bug" />;
    case "dark":
      return <Element color="#754" element="dark" />;
    case "dragon":
      return <Element color="#76e" element="dragon" />;
    case "electric":
      return <Element color="#fc3" element="electric" />;
    case "fairy":
      return <Element color="#e9e" element="fairy" />;
    case "fighting":
      return <Element color="#b54" element="fighting" />;
    case "fire":
      return <Element color="#f42" element="fire" />;
    case "flying":
      return <Element color="#89f" element="flying" />;
    case "ghost":
      return <Element color="#66b" element="ghost" />;
    case "grass":
      return <Element color="#7c5" element="grass" />;
    case "ground":
      return <Element color="#db5" element="ground" />;
    case "ice":
      return <Element color="#6cf" element="ice" />;
    case "normal":
      return <Element color="#aa9" element="normal" />;
    case "poison":
      return <Element color="#a59" element="poison" />;
    case "psychic":
      return <Element color="#f59" element="psychic" />;
    case "rock":
      return <Element color="#ba6" element="rock" />;
    case "steel":
      return <Element color="#aab" element="steel" />;
    case "water":
      return <Element color="#39f" element="water" />;
    default:
      (element: empty);
      throw new Error(`Unknown element type: ${element}`);
  }
}
