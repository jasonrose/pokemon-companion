/**
 * @format
 * @flow strict
 */

import { type ElementType } from "./element";

export type AffinityPercentageType = "0" | "25" | "50" | "100" | "200" | "400";

export type PokemonEntryType = {|
  name: string,
  number: number,
  types: $ReadOnlyArray<ElementType>,
  affinities: $ReadOnly<{
    [ElementType]: AffinityPercentageType
  }>
|};

const pokemon: $ReadOnlyArray<PokemonEntryType> = [
  {
    name: "Bulbasaur",
    number: 1,
    types: ["grass", "poison"],
    affinities: {
      fire: "200",
      water: "50",
      electric: "50",
      grass: "25",
      ice: "200",
      fighting: "50",
      flying: "200",
      psychic: "200",
      fairy: "50"
    }
  },
  {
    name: "Ivysaur",
    number: 2,
    types: ["grass", "poison"],
    affinities: {
      fire: "200",
      water: "50",
      electric: "50",
      grass: "25",
      ice: "200",
      fighting: "50",
      flying: "200",
      psychic: "200",
      fairy: "50"
    }
  },
  {
    name: "Venusaur",
    number: 3,
    types: ["grass", "poison"],
    affinities: {
      fire: "200",
      water: "50",
      electric: "50",
      grass: "25",
      ice: "200",
      fighting: "50",
      flying: "200",
      psychic: "200",
      fairy: "50"
    }
  },
  {
    name: "Charmander",
    number: 4,
    types: ["fire"],
    affinities: {
      fire: "50",
      water: "200",
      grass: "50",
      ice: "50",
      ground: "200",
      bug: "50",
      rock: "200",
      steel: "50",
      fairy: "50"
    }
  },
  {
    name: "Charmeleon",
    number: 5,
    types: ["fire"],
    affinities: {
      fire: "50",
      water: "200",
      grass: "50",
      ice: "50",
      ground: "200",
      bug: "50",
      rock: "200",
      steel: "50",
      fairy: "50"
    }
  },
  {
    name: "Charizard",
    number: 6,
    types: ["fire", "flying"],
    affinities: {
      fire: "50",
      water: "200",
      electric: "200",
      grass: "25",
      fighting: "50",
      ground: "0",
      bug: "25",
      rock: "400",
      steel: "50",
      fairy: "50"
    }
  },
  {
    name: "Squirtle",
    number: 7,
    types: ["water"],
    affinities: {
      fire: "50",
      water: "50",
      electric: "200",
      grass: "200",
      ice: "50",
      steel: "50"
    }
  },
  {
    name: "Wartortle",
    number: 8,
    types: ["water"],
    affinities: {
      fire: "50",
      water: "50",
      electric: "200",
      grass: "200",
      ice: "50",
      steel: "50"
    }
  },
  {
    name: "Blastoise",
    number: 9,
    types: ["water"],
    affinities: {
      fire: "50",
      water: "50",
      electric: "200",
      grass: "200",
      ice: "50",
      steel: "50"
    }
  },
  {
    name: "Caterpie",
    number: 10,
    types: ["bug"],
    affinities: {
      fire: "200",
      grass: "50",
      fighting: "50",
      ground: "50",
      flying: "200",
      rock: "200"
    }
  },
  {
    name: "Metapod",
    number: 11,
    types: ["bug"],
    affinities: {
      fire: "200",
      grass: "50",
      fighting: "50",
      ground: "50",
      flying: "200",
      rock: "200"
    }
  },
  {
    name: "Butterfree",
    number: 12,
    types: ["bug", "flying"],
    affinities: {
      fire: "200",
      electric: "200",
      grass: "25",
      ice: "200",
      fighting: "25",
      ground: "0",
      flying: "200",
      bug: "50",
      rock: "400"
    }
  },
  {
    name: "Weedle",
    number: 13,
    types: ["bug", "poison"],
    affinities: {
      fire: "200",
      grass: "25",
      fighting: "25",
      poison: "50",
      flying: "200",
      psychic: "200",
      bug: "50",
      rock: "200",
      fairy: "50"
    }
  },
  {
    name: "Kakuna",
    number: 14,
    types: ["bug", "poison"],
    affinities: {
      fire: "200",
      grass: "25",
      fighting: "25",
      poison: "50",
      flying: "200",
      psychic: "200",
      bug: "50",
      rock: "200",
      fairy: "50"
    }
  },
  {
    name: "Beedrill",
    number: 15,
    types: ["bug", "poison"],
    affinities: {
      fire: "200",
      grass: "25",
      fighting: "25",
      poison: "50",
      flying: "200",
      psychic: "200",
      bug: "50",
      rock: "200",
      fairy: "50"
    }
  },
  {
    name: "Pidgey",
    number: 16,
    types: ["normal", "flying"],
    affinities: {
      electric: "200",
      grass: "50",
      ice: "200",
      ground: "0",
      bug: "50",
      rock: "200",
      ghost: "0"
    }
  },
  {
    name: "Pidgeotto",
    number: 17,
    types: ["normal", "flying"],
    affinities: {
      electric: "200",
      grass: "50",
      ice: "200",
      ground: "0",
      bug: "50",
      rock: "200",
      ghost: "0"
    }
  },
  {
    name: "Pidgeot",
    number: 18,
    types: ["normal", "flying"],
    affinities: {
      electric: "200",
      grass: "50",
      ice: "200",
      ground: "0",
      bug: "50",
      rock: "200",
      ghost: "0"
    }
  },
  {
    name: "Rattata",
    number: 19,
    types: ["normal"],
    affinities: { fighting: "200", ghost: "0" }
  },
  {
    name: "Raticate",
    number: 20,
    types: ["normal"],
    affinities: { fighting: "200", ghost: "0" }
  },
  {
    name: "Spearow",
    number: 21,
    types: ["normal", "flying"],
    affinities: {
      electric: "200",
      grass: "50",
      ice: "200",
      ground: "0",
      bug: "50",
      rock: "200",
      ghost: "0"
    }
  },
  {
    name: "Fearow",
    number: 22,
    types: ["normal", "flying"],
    affinities: {
      electric: "200",
      grass: "50",
      ice: "200",
      ground: "0",
      bug: "50",
      rock: "200",
      ghost: "0"
    }
  },
  {
    name: "Ekans",
    number: 23,
    types: ["poison"],
    affinities: {
      grass: "50",
      fighting: "50",
      poison: "50",
      ground: "200",
      psychic: "200",
      bug: "50",
      fairy: "50"
    }
  },
  {
    name: "Arbok",
    number: 24,
    types: ["poison"],
    affinities: {
      grass: "50",
      fighting: "50",
      poison: "50",
      ground: "200",
      psychic: "200",
      bug: "50",
      fairy: "50"
    }
  },
  {
    name: "Pikachu",
    number: 25,
    types: ["electric"],
    affinities: { electric: "50", ground: "200", flying: "50", steel: "50" }
  },
  {
    name: "Raichu",
    number: 26,
    types: ["electric"],
    affinities: { electric: "50", ground: "200", flying: "50", steel: "50" }
  },
  {
    name: "Sandshrew",
    number: 27,
    types: ["ground"],
    affinities: {
      water: "200",
      electric: "0",
      grass: "200",
      ice: "200",
      poison: "50",
      rock: "50"
    }
  },
  {
    name: "Sandslash",
    number: 28,
    types: ["ground"],
    affinities: {
      water: "200",
      electric: "0",
      grass: "200",
      ice: "200",
      poison: "50",
      rock: "50"
    }
  },
  {
    name: "Nidoran♀",
    number: 29,
    types: ["poison"],
    affinities: {
      grass: "50",
      fighting: "50",
      poison: "50",
      ground: "200",
      psychic: "200",
      bug: "50",
      fairy: "50"
    }
  },
  {
    name: "Nidorina",
    number: 30,
    types: ["poison"],
    affinities: {
      grass: "50",
      fighting: "50",
      poison: "50",
      ground: "200",
      psychic: "200",
      bug: "50",
      fairy: "50"
    }
  },
  {
    name: "Nidoqueen",
    number: 31,
    types: ["poison", "ground"],
    affinities: {
      water: "200",
      electric: "0",
      ice: "200",
      fighting: "50",
      poison: "25",
      ground: "200",
      psychic: "200",
      bug: "50",
      rock: "50",
      fairy: "50"
    }
  },
  {
    name: "Nidoran♂",
    number: 32,
    types: ["poison"],
    affinities: {
      grass: "50",
      fighting: "50",
      poison: "50",
      ground: "200",
      psychic: "200",
      bug: "50",
      fairy: "50"
    }
  },
  {
    name: "Nidorino",
    number: 33,
    types: ["poison"],
    affinities: {
      grass: "50",
      fighting: "50",
      poison: "50",
      ground: "200",
      psychic: "200",
      bug: "50",
      fairy: "50"
    }
  },
  {
    name: "Nidoking",
    number: 34,
    types: ["poison", "ground"],
    affinities: {
      water: "200",
      electric: "0",
      ice: "200",
      fighting: "50",
      poison: "25",
      ground: "200",
      psychic: "200",
      bug: "50",
      rock: "50",
      fairy: "50"
    }
  },
  {
    name: "Clefairy",
    number: 35,
    types: ["fairy"],
    affinities: {
      fighting: "50",
      poison: "200",
      bug: "50",
      dragon: "0",
      dark: "50",
      steel: "200"
    }
  },
  {
    name: "Clefable",
    number: 36,
    types: ["fairy"],
    affinities: {
      fighting: "50",
      poison: "200",
      bug: "50",
      dragon: "0",
      dark: "50",
      steel: "200"
    }
  },
  {
    name: "Vulpix",
    number: 37,
    types: ["fire"],
    affinities: {
      fire: "0",
      water: "200",
      grass: "50",
      ice: "50",
      ground: "200",
      bug: "50",
      rock: "200",
      steel: "50",
      fairy: "50"
    }
  },
  {
    name: "Ninetales",
    number: 38,
    types: ["fire"],
    affinities: {
      fire: "0",
      water: "200",
      grass: "50",
      ice: "50",
      ground: "200",
      bug: "50",
      rock: "200",
      steel: "50",
      fairy: "50"
    }
  },
  {
    name: "Jigglypuff",
    number: 39,
    types: ["normal", "fairy"],
    affinities: {
      poison: "200",
      bug: "50",
      ghost: "0",
      dragon: "0",
      dark: "50",
      steel: "200"
    }
  },
  {
    name: "Wigglytuff",
    number: 40,
    types: ["normal", "fairy"],
    affinities: {
      poison: "200",
      bug: "50",
      ghost: "0",
      dragon: "0",
      dark: "50",
      steel: "200"
    }
  },
  {
    name: "Zubat",
    number: 41,
    types: ["poison", "flying"],
    affinities: {
      electric: "200",
      grass: "25",
      ice: "200",
      fighting: "25",
      poison: "50",
      ground: "0",
      psychic: "200",
      bug: "25",
      rock: "200",
      fairy: "50"
    }
  },
  {
    name: "Golbat",
    number: 42,
    types: ["poison", "flying"],
    affinities: {
      electric: "200",
      grass: "25",
      ice: "200",
      fighting: "25",
      poison: "50",
      ground: "0",
      psychic: "200",
      bug: "25",
      rock: "200",
      fairy: "50"
    }
  },
  {
    name: "Oddish",
    number: 43,
    types: ["grass", "poison"],
    affinities: {
      fire: "200",
      water: "50",
      electric: "50",
      grass: "25",
      ice: "200",
      fighting: "50",
      flying: "200",
      psychic: "200",
      fairy: "50"
    }
  },
  {
    name: "Gloom",
    number: 44,
    types: ["grass", "poison"],
    affinities: {
      fire: "200",
      water: "50",
      electric: "50",
      grass: "25",
      ice: "200",
      fighting: "50",
      flying: "200",
      psychic: "200",
      fairy: "50"
    }
  },
  {
    name: "Vileplume",
    number: 45,
    types: ["grass", "poison"],
    affinities: {
      fire: "200",
      water: "50",
      electric: "50",
      grass: "25",
      ice: "200",
      fighting: "50",
      flying: "200",
      psychic: "200",
      fairy: "50"
    }
  },
  {
    name: "Paras",
    number: 46,
    types: ["bug", "grass"],
    affinities: {
      fire: "400",
      water: "50",
      electric: "50",
      grass: "25",
      ice: "200",
      fighting: "50",
      poison: "200",
      ground: "25",
      flying: "400",
      bug: "200",
      rock: "200"
    }
  },
  {
    name: "Parasect",
    number: 47,
    types: ["bug", "grass"],
    affinities: {
      fire: "400",
      water: "50",
      electric: "50",
      grass: "25",
      ice: "200",
      fighting: "50",
      poison: "200",
      ground: "25",
      flying: "400",
      bug: "200",
      rock: "200"
    }
  },
  {
    name: "Venonat",
    number: 48,
    types: ["bug", "poison"],
    affinities: {
      fire: "200",
      grass: "25",
      fighting: "25",
      poison: "50",
      flying: "200",
      psychic: "200",
      bug: "50",
      rock: "200",
      fairy: "50"
    }
  },
  {
    name: "Venomoth",
    number: 49,
    types: ["bug", "poison"],
    affinities: {
      fire: "200",
      grass: "25",
      fighting: "25",
      poison: "50",
      flying: "200",
      psychic: "200",
      bug: "50",
      rock: "200",
      fairy: "50"
    }
  },
  {
    name: "Diglett",
    number: 50,
    types: ["ground"],
    affinities: {
      water: "200",
      electric: "0",
      grass: "200",
      ice: "200",
      poison: "50",
      rock: "50"
    }
  },
  {
    name: "Dugtrio",
    number: 51,
    types: ["ground"],
    affinities: {
      water: "200",
      electric: "0",
      grass: "200",
      ice: "200",
      poison: "50",
      rock: "50"
    }
  },
  {
    name: "Meowth",
    number: 52,
    types: ["normal"],
    affinities: { fighting: "200", ghost: "0" }
  },
  {
    name: "Persian",
    number: 53,
    types: ["normal"],
    affinities: { fighting: "200", ghost: "0" }
  },
  {
    name: "Psyduck",
    number: 54,
    types: ["water"],
    affinities: {
      fire: "50",
      water: "50",
      electric: "200",
      grass: "200",
      ice: "50",
      steel: "50"
    }
  },
  {
    name: "Golduck",
    number: 55,
    types: ["water"],
    affinities: {
      fire: "50",
      water: "50",
      electric: "200",
      grass: "200",
      ice: "50",
      steel: "50"
    }
  },
  {
    name: "Mankey",
    number: 56,
    types: ["fighting"],
    affinities: {
      flying: "200",
      psychic: "200",
      bug: "50",
      rock: "50",
      dark: "50",
      fairy: "200"
    }
  },
  {
    name: "Primeape",
    number: 57,
    types: ["fighting"],
    affinities: {
      flying: "200",
      psychic: "200",
      bug: "50",
      rock: "50",
      dark: "50",
      fairy: "200"
    }
  },
  {
    name: "Growlithe",
    number: 58,
    types: ["fire"],
    affinities: {
      fire: "50",
      water: "200",
      grass: "50",
      ice: "50",
      ground: "200",
      bug: "50",
      rock: "200",
      steel: "50",
      fairy: "50"
    }
  },
  {
    name: "Arcanine",
    number: 59,
    types: ["fire"],
    affinities: {
      fire: "50",
      water: "200",
      grass: "50",
      ice: "50",
      ground: "200",
      bug: "50",
      rock: "200",
      steel: "50",
      fairy: "50"
    }
  },
  {
    name: "Poliwag",
    number: 60,
    types: ["water"],
    affinities: {
      fire: "50",
      water: "0",
      electric: "200",
      grass: "200",
      ice: "50",
      steel: "50"
    }
  },
  {
    name: "Poliwhirl",
    number: 61,
    types: ["water"],
    affinities: {
      fire: "50",
      water: "0",
      electric: "200",
      grass: "200",
      ice: "50",
      steel: "50"
    }
  },
  {
    name: "Poliwrath",
    number: 62,
    types: ["water", "fighting"],
    affinities: {
      fire: "50",
      water: "0",
      electric: "200",
      grass: "200",
      ice: "50",
      flying: "200",
      psychic: "200",
      bug: "50",
      rock: "50",
      dark: "50",
      steel: "50",
      fairy: "200"
    }
  },
  {
    name: "Abra",
    number: 63,
    types: ["psychic"],
    affinities: {
      fighting: "50",
      psychic: "50",
      bug: "200",
      ghost: "200",
      dark: "200"
    }
  },
  {
    name: "Kadabra",
    number: 64,
    types: ["psychic"],
    affinities: {
      fighting: "50",
      psychic: "50",
      bug: "200",
      ghost: "200",
      dark: "200"
    }
  },
  {
    name: "Alakazam",
    number: 65,
    types: ["psychic"],
    affinities: {
      fighting: "50",
      psychic: "50",
      bug: "200",
      ghost: "200",
      dark: "200"
    }
  },
  {
    name: "Machop",
    number: 66,
    types: ["fighting"],
    affinities: {
      flying: "200",
      psychic: "200",
      bug: "50",
      rock: "50",
      dark: "50",
      fairy: "200"
    }
  },
  {
    name: "Machoke",
    number: 67,
    types: ["fighting"],
    affinities: {
      flying: "200",
      psychic: "200",
      bug: "50",
      rock: "50",
      dark: "50",
      fairy: "200"
    }
  },
  {
    name: "Machamp",
    number: 68,
    types: ["fighting"],
    affinities: {
      flying: "200",
      psychic: "200",
      bug: "50",
      rock: "50",
      dark: "50",
      fairy: "200"
    }
  },
  {
    name: "Bellsprout",
    number: 69,
    types: ["grass", "poison"],
    affinities: {
      fire: "200",
      water: "50",
      electric: "50",
      grass: "25",
      ice: "200",
      fighting: "50",
      flying: "200",
      psychic: "200",
      fairy: "50"
    }
  },
  {
    name: "Weepinbell",
    number: 70,
    types: ["grass", "poison"],
    affinities: {
      fire: "200",
      water: "50",
      electric: "50",
      grass: "25",
      ice: "200",
      fighting: "50",
      flying: "200",
      psychic: "200",
      fairy: "50"
    }
  },
  {
    name: "Victreebel",
    number: 71,
    types: ["grass", "poison"],
    affinities: {
      fire: "200",
      water: "50",
      electric: "50",
      grass: "25",
      ice: "200",
      fighting: "50",
      flying: "200",
      psychic: "200",
      fairy: "50"
    }
  },
  {
    name: "Tentacool",
    number: 72,
    types: ["water", "poison"],
    affinities: {
      fire: "50",
      water: "50",
      electric: "200",
      ice: "50",
      fighting: "50",
      poison: "50",
      ground: "200",
      psychic: "200",
      bug: "50",
      steel: "50",
      fairy: "50"
    }
  },
  {
    name: "Tentacruel",
    number: 73,
    types: ["water", "poison"],
    affinities: {
      fire: "50",
      water: "50",
      electric: "200",
      ice: "50",
      fighting: "50",
      poison: "50",
      ground: "200",
      psychic: "200",
      bug: "50",
      steel: "50",
      fairy: "50"
    }
  },
  {
    name: "Geodude",
    number: 74,
    types: ["rock", "ground"],
    affinities: {
      normal: "50",
      fire: "50",
      water: "400",
      electric: "0",
      grass: "400",
      ice: "200",
      fighting: "200",
      poison: "25",
      ground: "200",
      flying: "50",
      rock: "50",
      steel: "200"
    }
  },
  {
    name: "Graveler",
    number: 75,
    types: ["rock", "ground"],
    affinities: {
      normal: "50",
      fire: "50",
      water: "400",
      electric: "0",
      grass: "400",
      ice: "200",
      fighting: "200",
      poison: "25",
      ground: "200",
      flying: "50",
      rock: "50",
      steel: "200"
    }
  },
  {
    name: "Golem",
    number: 76,
    types: ["rock", "ground"],
    affinities: {
      normal: "50",
      fire: "50",
      water: "400",
      electric: "0",
      grass: "400",
      ice: "200",
      fighting: "200",
      poison: "25",
      ground: "200",
      flying: "50",
      rock: "50",
      steel: "200"
    }
  },
  {
    name: "Ponyta",
    number: 77,
    types: ["fire"],
    affinities: {
      fire: "50",
      water: "200",
      grass: "50",
      ice: "50",
      ground: "200",
      bug: "50",
      rock: "200",
      steel: "50",
      fairy: "50"
    }
  },
  {
    name: "Rapidash",
    number: 78,
    types: ["fire"],
    affinities: {
      fire: "50",
      water: "200",
      grass: "50",
      ice: "50",
      ground: "200",
      bug: "50",
      rock: "200",
      steel: "50",
      fairy: "50"
    }
  },
  {
    name: "Slowpoke",
    number: 79,
    types: ["water", "psychic"],
    affinities: {
      fire: "50",
      water: "50",
      electric: "200",
      grass: "200",
      ice: "50",
      fighting: "50",
      psychic: "50",
      bug: "200",
      ghost: "200",
      dark: "200",
      steel: "50"
    }
  },
  {
    name: "Slowbro",
    number: 80,
    types: ["water", "psychic"],
    affinities: {
      fire: "50",
      water: "50",
      electric: "200",
      grass: "200",
      ice: "50",
      fighting: "50",
      psychic: "50",
      bug: "200",
      ghost: "200",
      dark: "200",
      steel: "50"
    }
  },
  {
    name: "Magnemite",
    number: 81,
    types: ["electric", "steel"],
    affinities: {
      normal: "50",
      fire: "200",
      electric: "50",
      grass: "50",
      ice: "50",
      fighting: "200",
      poison: "0",
      ground: "400",
      flying: "25",
      psychic: "50",
      bug: "50",
      rock: "50",
      dragon: "50",
      steel: "25",
      fairy: "50"
    }
  },
  {
    name: "Magneton",
    number: 82,
    types: ["electric", "steel"],
    affinities: {
      normal: "50",
      fire: "200",
      electric: "50",
      grass: "50",
      ice: "50",
      fighting: "200",
      poison: "0",
      ground: "400",
      flying: "25",
      psychic: "50",
      bug: "50",
      rock: "50",
      dragon: "50",
      steel: "25",
      fairy: "50"
    }
  },
  {
    name: "Farfetch'd",
    number: 83,
    types: ["normal", "flying"],
    affinities: {
      electric: "200",
      grass: "50",
      ice: "200",
      ground: "0",
      bug: "50",
      rock: "200",
      ghost: "0"
    }
  },
  {
    name: "Doduo",
    number: 84,
    types: ["normal", "flying"],
    affinities: {
      electric: "200",
      grass: "50",
      ice: "200",
      ground: "0",
      bug: "50",
      rock: "200",
      ghost: "0"
    }
  },
  {
    name: "Dodrio",
    number: 85,
    types: ["normal", "flying"],
    affinities: {
      electric: "200",
      grass: "50",
      ice: "200",
      ground: "0",
      bug: "50",
      rock: "200",
      ghost: "0"
    }
  },
  {
    name: "Seel",
    number: 86,
    types: ["water"],
    affinities: {
      fire: "25",
      water: "50",
      electric: "200",
      grass: "200",
      ice: "25",
      steel: "50"
    }
  },
  {
    name: "Dewgong",
    number: 87,
    types: ["water", "ice"],
    affinities: {
      fire: "50",
      water: "50",
      electric: "200",
      grass: "200",
      fighting: "200",
      rock: "200"
    }
  },
  {
    name: "Grimer",
    number: 88,
    types: ["poison"],
    affinities: {
      grass: "50",
      fighting: "50",
      poison: "50",
      ground: "200",
      psychic: "200",
      bug: "50",
      fairy: "50"
    }
  },
  {
    name: "Muk",
    number: 89,
    types: ["poison"],
    affinities: {
      grass: "50",
      fighting: "50",
      poison: "50",
      ground: "200",
      psychic: "200",
      bug: "50",
      fairy: "50"
    }
  },
  {
    name: "Shellder",
    number: 90,
    types: ["water"],
    affinities: {
      fire: "50",
      water: "50",
      electric: "200",
      grass: "200",
      ice: "50",
      steel: "50"
    }
  },
  {
    name: "Cloyster",
    number: 91,
    types: ["water", "ice"],
    affinities: {
      water: "50",
      electric: "200",
      grass: "200",
      ice: "25",
      fighting: "200",
      rock: "200"
    }
  },
  {
    name: "Gastly",
    number: 92,
    types: ["ghost", "poison"],
    affinities: {
      normal: "0",
      grass: "50",
      fighting: "0",
      poison: "25",
      ground: "0",
      psychic: "200",
      bug: "25",
      ghost: "200",
      dark: "200",
      fairy: "50"
    }
  },
  {
    name: "Haunter",
    number: 93,
    types: ["ghost", "poison"],
    affinities: {
      normal: "0",
      grass: "50",
      fighting: "0",
      poison: "25",
      ground: "0",
      psychic: "200",
      bug: "25",
      ghost: "200",
      dark: "200",
      fairy: "50"
    }
  },
  {
    name: "Gengar",
    number: 94,
    types: ["ghost", "poison"],
    affinities: {
      normal: "0",
      grass: "50",
      fighting: "0",
      poison: "25",
      ground: "200",
      psychic: "200",
      bug: "25",
      ghost: "200",
      dark: "200",
      fairy: "50"
    }
  },
  {
    name: "Onix",
    number: 95,
    types: ["rock", "ground"],
    affinities: {
      normal: "50",
      fire: "50",
      water: "400",
      electric: "0",
      grass: "400",
      ice: "200",
      fighting: "200",
      poison: "25",
      ground: "200",
      flying: "50",
      rock: "50",
      steel: "200"
    }
  },
  {
    name: "Drowzee",
    number: 96,
    types: ["psychic"],
    affinities: {
      fighting: "50",
      psychic: "50",
      bug: "200",
      ghost: "200",
      dark: "200"
    }
  },
  {
    name: "Hypno",
    number: 97,
    types: ["psychic"],
    affinities: {
      fighting: "50",
      psychic: "50",
      bug: "200",
      ghost: "200",
      dark: "200"
    }
  },
  {
    name: "Krabby",
    number: 98,
    types: ["water"],
    affinities: {
      fire: "50",
      water: "50",
      electric: "200",
      grass: "200",
      ice: "50",
      steel: "50"
    }
  },
  {
    name: "Kingler",
    number: 99,
    types: ["water"],
    affinities: {
      fire: "50",
      water: "50",
      electric: "200",
      grass: "200",
      ice: "50",
      steel: "50"
    }
  },
  {
    name: "Voltorb",
    number: 100,
    types: ["electric"],
    affinities: { electric: "50", ground: "200", flying: "50", steel: "50" }
  },
  {
    name: "Electrode",
    number: 101,
    types: ["electric"],
    affinities: { electric: "50", ground: "200", flying: "50", steel: "50" }
  },
  {
    name: "Exeggcute",
    number: 102,
    types: ["grass", "psychic"],
    affinities: {
      fire: "200",
      water: "50",
      electric: "50",
      grass: "50",
      ice: "200",
      fighting: "50",
      poison: "200",
      ground: "50",
      flying: "200",
      psychic: "50",
      bug: "400",
      ghost: "200",
      dark: "200"
    }
  },
  {
    name: "Exeggutor",
    number: 103,
    types: ["grass", "psychic"],
    affinities: {
      fire: "200",
      water: "50",
      electric: "50",
      grass: "50",
      ice: "200",
      fighting: "50",
      poison: "200",
      ground: "50",
      flying: "200",
      psychic: "50",
      bug: "400",
      ghost: "200",
      dark: "200"
    }
  },
  {
    name: "Cubone",
    number: 104,
    types: ["ground"],
    affinities: {
      water: "200",
      electric: "0",
      grass: "200",
      ice: "200",
      poison: "50",
      rock: "50"
    }
  },
  {
    name: "Marowak",
    number: 105,
    types: ["ground"],
    affinities: {
      water: "200",
      electric: "0",
      grass: "200",
      ice: "200",
      poison: "50",
      rock: "50"
    }
  },
  {
    name: "Hitmonlee",
    number: 106,
    types: ["fighting"],
    affinities: {
      flying: "200",
      psychic: "200",
      bug: "50",
      rock: "50",
      dark: "50",
      fairy: "200"
    }
  },
  {
    name: "Hitmonchan",
    number: 107,
    types: ["fighting"],
    affinities: {
      flying: "200",
      psychic: "200",
      bug: "50",
      rock: "50",
      dark: "50",
      fairy: "200"
    }
  },
  {
    name: "Lickitung",
    number: 108,
    types: ["normal"],
    affinities: { fighting: "200", ghost: "0" }
  },
  {
    name: "Koffing",
    number: 109,
    types: ["poison"],
    affinities: {
      grass: "50",
      fighting: "50",
      poison: "50",
      ground: "0",
      psychic: "200",
      bug: "50",
      fairy: "50"
    }
  },
  {
    name: "Weezing",
    number: 110,
    types: ["poison"],
    affinities: {
      grass: "50",
      fighting: "50",
      poison: "50",
      ground: "0",
      psychic: "200",
      bug: "50",
      fairy: "50"
    }
  },
  {
    name: "Rhyhorn",
    number: 111,
    types: ["ground", "rock"],
    affinities: {
      normal: "50",
      fire: "50",
      water: "400",
      electric: "0",
      grass: "400",
      ice: "200",
      fighting: "200",
      poison: "25",
      ground: "200",
      flying: "50",
      rock: "50",
      steel: "200"
    }
  },
  {
    name: "Rhydon",
    number: 112,
    types: ["ground", "rock"],
    affinities: {
      normal: "50",
      fire: "50",
      water: "400",
      electric: "0",
      grass: "400",
      ice: "200",
      fighting: "200",
      poison: "25",
      ground: "200",
      flying: "50",
      rock: "50",
      steel: "200"
    }
  },
  {
    name: "Chansey",
    number: 113,
    types: ["normal"],
    affinities: { fighting: "200", ghost: "0" }
  },
  {
    name: "Tangela",
    number: 114,
    types: ["grass"],
    affinities: {
      fire: "200",
      water: "50",
      electric: "50",
      grass: "50",
      ice: "200",
      poison: "200",
      ground: "50",
      flying: "200",
      bug: "200"
    }
  },
  {
    name: "Kangaskhan",
    number: 115,
    types: ["normal"],
    affinities: { fighting: "200", ghost: "0" }
  },
  {
    name: "Horsea",
    number: 116,
    types: ["water"],
    affinities: {
      fire: "50",
      water: "50",
      electric: "200",
      grass: "200",
      ice: "50",
      steel: "50"
    }
  },
  {
    name: "Seadra",
    number: 117,
    types: ["water"],
    affinities: {
      fire: "50",
      water: "50",
      electric: "200",
      grass: "200",
      ice: "50",
      steel: "50"
    }
  },
  {
    name: "Goldeen",
    number: 118,
    types: ["water"],
    affinities: {
      fire: "50",
      water: "50",
      electric: "200",
      grass: "200",
      ice: "50",
      steel: "50"
    }
  },
  {
    name: "Seaking",
    number: 119,
    types: ["water"],
    affinities: {
      fire: "50",
      water: "50",
      electric: "200",
      grass: "200",
      ice: "50",
      steel: "50"
    }
  },
  {
    name: "Staryu",
    number: 120,
    types: ["water"],
    affinities: {
      fire: "50",
      water: "50",
      electric: "200",
      grass: "200",
      ice: "50",
      steel: "50"
    }
  },
  {
    name: "Starmie",
    number: 121,
    types: ["water", "psychic"],
    affinities: {
      fire: "50",
      water: "50",
      electric: "200",
      grass: "200",
      ice: "50",
      fighting: "50",
      psychic: "50",
      bug: "200",
      ghost: "200",
      dark: "200",
      steel: "50"
    }
  },
  {
    name: "Mr. Mime",
    number: 122,
    types: ["psychic", "fairy"],
    affinities: {
      fighting: "25",
      poison: "200",
      psychic: "50",
      ghost: "200",
      dragon: "0",
      steel: "200"
    }
  },
  {
    name: "Scyther",
    number: 123,
    types: ["bug", "flying"],
    affinities: {
      fire: "200",
      electric: "200",
      grass: "25",
      ice: "200",
      fighting: "25",
      ground: "0",
      flying: "200",
      bug: "50",
      rock: "400"
    }
  },
  {
    name: "Jynx",
    number: 124,
    types: ["ice", "psychic"],
    affinities: {
      fire: "200",
      ice: "50",
      psychic: "50",
      bug: "200",
      rock: "200",
      ghost: "200",
      dark: "200",
      steel: "200"
    }
  },
  {
    name: "Electabuzz",
    number: 125,
    types: ["electric"],
    affinities: { electric: "50", ground: "200", flying: "50", steel: "50" }
  },
  {
    name: "Magmar",
    number: 126,
    types: ["fire"],
    affinities: {
      fire: "50",
      water: "200",
      grass: "50",
      ice: "50",
      ground: "200",
      bug: "50",
      rock: "200",
      steel: "50",
      fairy: "50"
    }
  },
  {
    name: "Pinsir",
    number: 127,
    types: ["bug"],
    affinities: {
      fire: "200",
      grass: "50",
      fighting: "50",
      ground: "50",
      flying: "200",
      rock: "200"
    }
  },
  {
    name: "Tauros",
    number: 128,
    types: ["normal"],
    affinities: { fighting: "200", ghost: "0" }
  },
  {
    name: "Magikarp",
    number: 129,
    types: ["water"],
    affinities: {
      fire: "50",
      water: "50",
      electric: "200",
      grass: "200",
      ice: "50",
      steel: "50"
    }
  },
  {
    name: "Gyarados",
    number: 130,
    types: ["water", "flying"],
    affinities: {
      fire: "50",
      water: "50",
      electric: "400",
      fighting: "50",
      ground: "0",
      bug: "50",
      rock: "200",
      steel: "50"
    }
  },
  {
    name: "Lapras",
    number: 131,
    types: ["water", "ice"],
    affinities: {
      water: "0",
      electric: "200",
      grass: "200",
      ice: "25",
      fighting: "200",
      rock: "200"
    }
  },
  {
    name: "Ditto",
    number: 132,
    types: ["normal"],
    affinities: { fighting: "200", ghost: "0" }
  },
  {
    name: "Eevee",
    number: 133,
    types: ["normal"],
    affinities: { fighting: "200", ghost: "0" }
  },
  {
    name: "Vaporeon",
    number: 134,
    types: ["water"],
    affinities: {
      fire: "50",
      water: "0",
      electric: "200",
      grass: "200",
      ice: "50",
      steel: "50"
    }
  },
  {
    name: "Jolteon",
    number: 135,
    types: ["electric"],
    affinities: { electric: "0", ground: "200", flying: "50", steel: "50" }
  },
  {
    name: "Flareon",
    number: 136,
    types: ["fire"],
    affinities: {
      fire: "0",
      water: "200",
      grass: "50",
      ice: "50",
      ground: "200",
      bug: "50",
      rock: "200",
      steel: "50",
      fairy: "50"
    }
  },
  {
    name: "Porygon",
    number: 137,
    types: ["normal"],
    affinities: { fighting: "200", ghost: "0" }
  },
  {
    name: "Omanyte",
    number: 138,
    types: ["rock", "water"],
    affinities: {
      normal: "50",
      fire: "25",
      electric: "200",
      grass: "400",
      ice: "50",
      fighting: "200",
      poison: "50",
      ground: "200",
      flying: "50"
    }
  },
  {
    name: "Omastar",
    number: 139,
    types: ["rock", "water"],
    affinities: {
      normal: "50",
      fire: "25",
      electric: "200",
      grass: "400",
      ice: "50",
      fighting: "200",
      poison: "50",
      ground: "200",
      flying: "50"
    }
  },
  {
    name: "Kabuto",
    number: 140,
    types: ["rock", "water"],
    affinities: {
      normal: "50",
      fire: "25",
      electric: "200",
      grass: "400",
      ice: "50",
      fighting: "200",
      poison: "50",
      ground: "200",
      flying: "50"
    }
  },
  {
    name: "Kabutops",
    number: 141,
    types: ["rock", "water"],
    affinities: {
      normal: "50",
      fire: "25",
      electric: "200",
      grass: "400",
      ice: "50",
      fighting: "200",
      poison: "50",
      ground: "200",
      flying: "50"
    }
  },
  {
    name: "Aerodactyl",
    number: 142,
    types: ["rock", "flying"],
    affinities: {
      normal: "50",
      fire: "50",
      water: "200",
      electric: "200",
      ice: "200",
      poison: "50",
      ground: "0",
      flying: "50",
      bug: "50",
      rock: "200",
      steel: "200"
    }
  },
  {
    name: "Snorlax",
    number: 143,
    types: ["normal"],
    affinities: { fighting: "200", ghost: "0" }
  },
  {
    name: "Articuno",
    number: 144,
    types: ["ice", "flying"],
    affinities: {
      fire: "200",
      electric: "200",
      grass: "50",
      ground: "0",
      bug: "50",
      rock: "400",
      steel: "200"
    }
  },
  {
    name: "Zapdos",
    number: 145,
    types: ["electric", "flying"],
    affinities: {
      grass: "50",
      ice: "200",
      fighting: "50",
      ground: "0",
      flying: "50",
      bug: "50",
      rock: "200",
      steel: "50"
    }
  },
  {
    name: "Moltres",
    number: 146,
    types: ["fire", "flying"],
    affinities: {
      fire: "50",
      water: "200",
      electric: "200",
      grass: "25",
      fighting: "50",
      ground: "0",
      bug: "25",
      rock: "400",
      steel: "50",
      fairy: "50"
    }
  },
  {
    name: "Dratini",
    number: 147,
    types: ["dragon"],
    affinities: {
      fire: "50",
      water: "50",
      electric: "50",
      grass: "50",
      ice: "200",
      dragon: "200",
      fairy: "200"
    }
  },
  {
    name: "Dragonair",
    number: 148,
    types: ["dragon"],
    affinities: {
      fire: "50",
      water: "50",
      electric: "50",
      grass: "50",
      ice: "200",
      dragon: "200",
      fairy: "200"
    }
  },
  {
    name: "Dragonite",
    number: 149,
    types: ["dragon", "flying"],
    affinities: {
      fire: "50",
      water: "50",
      grass: "25",
      ice: "400",
      fighting: "50",
      ground: "0",
      bug: "50",
      rock: "200",
      dragon: "200",
      fairy: "200"
    }
  },
  {
    name: "Mewtwo",
    number: 150,
    types: ["psychic"],
    affinities: {
      fighting: "50",
      psychic: "50",
      bug: "200",
      ghost: "200",
      dark: "200"
    }
  },
  {
    name: "Mew",
    number: 151,
    types: ["psychic"],
    affinities: {
      fighting: "50",
      psychic: "50",
      bug: "200",
      ghost: "200",
      dark: "200"
    }
  }
];

export default pokemon;
