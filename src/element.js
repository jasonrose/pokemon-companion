/**
 * @format
 * @flow strict
 */

import * as React from "react";
import "./element.css";

const elementsObject = {
  bug: true,
  dark: true,
  dragon: true,
  electric: true,
  fairy: true,
  fighting: true,
  fire: true,
  flying: true,
  ghost: true,
  grass: true,
  ground: true,
  ice: true,
  normal: true,
  poison: true,
  psychic: true,
  rock: true,
  steel: true,
  water: true
};

export type ElementType = $Keys<typeof elementsObject>;

export const elements: $ReadOnlyArray<ElementType> = Object.keys(
  elementsObject
);

type ElementImplPropsType = {|
  color: string,
  element: ElementType
|};

function ElementImpl(props: ElementImplPropsType) {
  return (
    <div className="element" style={{ backgroundColor: props.color }}>
      {props.element}
    </div>
  );
}

type ElementPropsType = {| element: ElementType |};

export function Element(props: ElementPropsType) {
  switch (props.element) {
    case "bug":
      return <ElementImpl color="#ab2" element="bug" />;
    case "dark":
      return <ElementImpl color="#754" element="dark" />;
    case "dragon":
      return <ElementImpl color="#76e" element="dragon" />;
    case "electric":
      return <ElementImpl color="#fc3" element="electric" />;
    case "fairy":
      return <ElementImpl color="#e9e" element="fairy" />;
    case "fighting":
      return <ElementImpl color="#b54" element="fighting" />;
    case "fire":
      return <ElementImpl color="#f42" element="fire" />;
    case "flying":
      return <ElementImpl color="#89f" element="flying" />;
    case "ghost":
      return <ElementImpl color="#66b" element="ghost" />;
    case "grass":
      return <ElementImpl color="#7c5" element="grass" />;
    case "ground":
      return <ElementImpl color="#db5" element="ground" />;
    case "ice":
      return <ElementImpl color="#6cf" element="ice" />;
    case "normal":
      return <ElementImpl color="#aa9" element="normal" />;
    case "poison":
      return <ElementImpl color="#a59" element="poison" />;
    case "psychic":
      return <ElementImpl color="#f59" element="psychic" />;
    case "rock":
      return <ElementImpl color="#ba6" element="rock" />;
    case "steel":
      return <ElementImpl color="#aab" element="steel" />;
    case "water":
      return <ElementImpl color="#39f" element="water" />;
    default:
      (props.element: empty);
      throw new Error(`Unknown element type: ${props.element}`);
  }
}
