import React, { Component } from "react"
import isMobile from "ismobilejs"
import Autosuggest from "react-autosuggest"
import data from "../data/data"
import { escapeRegexCharacters } from "../utils/utils"
import "./form.css"

const focusInputOnSuggestionClick = !isMobile.any

const getSuggestions = value => {
  const escapedValue = escapeRegexCharacters(value.trim())

  if (escapedValue === "") {
    return []
  }

  const regex = new RegExp("^" + escapedValue, "i")

  return data.filter(item => regex.test(item.activity))
}

const getSuggestionValue = suggestion => suggestion.activity

const renderSuggestion = suggestion => <span>{suggestion.activity}</span>

export default class Form extends Component {
  constructor() {
    super()

    this.state = {
      value: "",
      suggestions: [],
    }
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    })
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    })
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    })
  }

  render() {
    const { value, suggestions } = this.state
    const inputProps = {
      placeholder: "___",
      value,
      onChange: this.onChange,
    }

    return (
      <div className="inline-block">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          focusInputOnSuggestionClick={focusInputOnSuggestionClick}
          id="form"
        />
      </div>
    )
  }
}
