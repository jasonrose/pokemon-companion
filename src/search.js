/**
 * @format
 * @flow strict
 */

import * as React from "react";
import Autosuggest from "react-autosuggest";
import { type RouterHistory } from "react-router-dom";
import pokedex, { type PokemonEntryType } from "./pokemon";
import "./search.css";

const pokemonValues = pokedex;

const getSuggestions: (
  value: string
) => $ReadOnlyArray<PokemonEntryType> = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength < 3
    ? []
    : pokemonValues.filter(
        pokemon => pokemon.name.toLowerCase().indexOf(inputValue) > -1
      );
};

const renderSuggestion = suggestion => <div>{suggestion.name}</div>;

const getSuggestionValue = suggestion => suggestion.name;

const shouldRenderSuggestions = () => {
  return true;
};

type SearchPropsType = {|
  history: RouterHistory
|};

type SearchStateType = {|
  value: string,
  suggestions: $ReadOnlyArray<PokemonEntryType>
|};

class Search extends React.Component<SearchPropsType, SearchStateType> {
  props: SearchPropsType;
  state: SearchStateType = { value: "", suggestions: [] };

  _handleSearchChange = (
    _event: mixed,
    { newValue }: {| newValue: string |}
  ) => {
    this.setState({
      value: newValue
    });
  };

  _handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  _handleSuggestionsFetchRequested = ({ value }: {| value: string |}) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  _handleSuggestionSelected = (
    _event: mixed,
    { suggestion }: {| suggestion: PokemonEntryType |}
  ) => {
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
        <Autosuggest
          suggestions={this.state.suggestions}
          onSuggestionsClearRequested={this._handleSuggestionsClearRequested}
          onSuggestionsFetchRequested={this._handleSuggestionsFetchRequested}
          onSuggestionSelected={this._handleSuggestionSelected}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          shouldRenderSuggestions={shouldRenderSuggestions}
          inputProps={inputProps}
        />
      </>
    );
  }
}

export default Search;
