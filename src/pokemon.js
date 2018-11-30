/**
 * @format
 * @flow strict
 */

import { type ElementType } from "./element";

export type AffinityPercentageType = "0" | "25" | "50" | "100" | "200" | "400";

type PokemonEntryType = {|
  name: string,
  number: number,
  types: $ReadOnlyArray<ElementType>,
  affinities: $ReadOnly<{
    [ElementType]: AffinityPercentageType
  }>
|};

const pokemon: $ReadOnly<{ [string]: PokemonEntryType }> = {
  "1": {
    name: "Bulbasaur",
    number: 1,
    types: ["grass", "poison"],
    affinities: {
      electric: "50",
      fairy: "50",
      fighting: "50",
      fire: "200",
      flying: "200",
      grass: "25",
      ice: "200",
      psychic: "200",
      water: "50"
    }
  }
};

export default pokemon;
