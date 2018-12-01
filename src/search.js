/**
 * @format
 * @flow strict
 */

import * as React from "react";
import Autosuggest from "react-autosuggest";
import {
  type RouterHistory,
  type Location,
  type Match
} from "react-router-dom";
import pokedex, { type PokemonEntryType } from "./pokemon";
import "./search.css";

const pokemonValues = Object.values(pokedex);

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength < 3
    ? []
    : pokemonValues.filter(
        pokemon => pokemon.name.toLowerCase().indexOf(inputValue) > -1
      );
};

const renderSuggestion = suggestion => <div>{suggestion.name}</div>;

const getSuggestionValue = suggestion => suggestion.number;

type SearchPropsType = {|
  history: RouterHistory,
  location: Location,
  match: Match
|};

type SearchStateType = {|
  value: string,
  suggestions: $ReadOnlyArray<PokemonEntryType>
|};

class Search extends React.Component<SearchPropsType, SearchStateType> {
  props: SearchPropsType;
  state: SearchStateType = { value: "", suggestions: [] };

  _handleSearchChange = (_event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  _handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  _handleSuggestionSelected = (_event, { suggestion }) => {
    this.props.history.push(`/pokemon/${suggestion.number}`);
  };

  render() {
    const inputProps = {
      placeholder: "Type a pokémon's name...",
      value: this.state.value,
      onChange: this._handleSearchChange
    };

    return (
      <>
        <h1 className="title">Poké Companion</h1>
        <Autosuggest
          alwaysRenderSuggestions
          suggestions={this.state.suggestions}
          onSuggestionsFetchRequested={this._handleSuggestionsFetchRequested}
          onSuggestionSelected={this._handleSuggestionSelected}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </>
    );
  }
}

export default Search;
