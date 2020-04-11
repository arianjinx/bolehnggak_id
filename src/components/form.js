import React, { useState } from "react"
import isMobile from "ismobilejs"
import Autosuggest from "react-autosuggest"
import data from "../data/data"
import { escapeRegexCharacters } from "../utils/utils"
import "./form.css"
import styled from "@emotion/styled"
import tw from "twin.macro"

const focusInputOnSuggestionClick = !isMobile.any

const Form = () => {
  const [isShowAutosuggest, setIsShowAutosuggest] = useState(false)
  const [value, setValue] = useState("")
  const [suggestions, setSuggestions] = useState([])

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

  function onChange(event, { newValue }) {
    setValue(newValue)
  }

  function onSuggestionsFetchRequested({ value }) {
    setSuggestions(getSuggestions(value))
  }

  function onSuggestionsClearRequested() {
    setSuggestions([])
  }

  const inputProps = {
    placeholder: "Cari kegiatan",
    value,
    onChange: onChange,
  }

  const Box = styled.div`
    background: #ffffff;
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 10px 24px;

    ${tw`font-bold`}
  `

  return (
    <div className="mr-4 relative my-4" style={{ minWidth: 210 }}>
      <Box
        onClick={() => setIsShowAutosuggest(!isShowAutosuggest)}
        className="cursor-pointer"
      >
        {value || "__________"}
      </Box>
      {isShowAutosuggest && (
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          focusInputOnSuggestionClick={focusInputOnSuggestionClick}
          id="form"
        />
      )}
    </div>
  )
}

export default Form
