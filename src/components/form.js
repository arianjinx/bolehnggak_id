import React, { useState } from "react"
import isMobile from "ismobilejs"
import Autosuggest from "react-autosuggest"
import data from "../data/data"
import { escapeRegexCharacters } from "../utils/utils"
import "./form.css"
import styled from "@emotion/styled"
import tw from "twin.macro"
import IconTriangle from "../images/icon-triangle.svg"

const focusInputOnSuggestionClick = !isMobile.any

const getSuggestions = value => {
  const escapedValue = escapeRegexCharacters(value.trim())

  if (escapedValue === "") {
    return data
  }

  const regex = new RegExp(escapedValue, "i")
  return data.filter(item => regex.test(item.activity))
}

const getSuggestionValue = suggestion => suggestion.activity

const renderSuggestion = suggestion => <span>{suggestion.activity}</span>

const Form = () => {
  const [isShowAutosuggest, setIsShowAutosuggest] = useState(false)
  const [value, setValue] = useState("")
  const [selected, setSelected] = useState(null)
  const [suggestions, setSuggestions] = useState(data)

  const onBlur = () => {
    setIsShowAutosuggest(false)
  }

  const onChange = (event, { newValue }) => {
    setValue(newValue)
  }

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(isShowAutosuggest ? getSuggestions(value) : data)
  }

  const onSuggestionsClearRequested = () => {
    setSuggestions(data)
  }

  const onSuggestionSelected = (event, { suggestionValue }) => {
    setIsShowAutosuggest(false)
    setSelected(data.filter(item => item.activity === suggestionValue)[0])
  }

  const handleBoxClick = () => {
    setSuggestions(data)
    setValue("")
    setIsShowAutosuggest(!isShowAutosuggest)
  }

  const inputProps = {
    placeholder: "Cari kegiatan",
    value,
    onChange,
    onBlur,
  }

  const Box = styled.div`
    ${tw`font-bold cursor-pointer flex items-center bg-white rounded box-border border-solid border border-gray-500 px-6 py-2 justify-center select-none`}
    min-width: 150px;
    ${isShowAutosuggest && tw`rounded-b-none`}
  `

  const AnswerHeading = styled.h2`
    ${tw`text-3xl lg:text-4xl font-bold mb-3 lg:mb-6`};
  `

  const Answer = styled.div`
    ${tw`text-lg text-gray-700`};
  `

  return (
    <>
      <div className="flex flex-row items-center max-w-2xl font-medium flex-wrap text-3xl lg:text-4xl">
        <div className="mr-4 leading-tight ">Boleh nggak aku</div>
        <div className="flex flex-row items-center">
          <div className="my-4 relative mr-4">
            <Box onClick={handleBoxClick}>
              {selected ? (
                <>
                  {selected.activity}
                  <img
                    src={IconTriangle}
                    alt=""
                    className="inline-block ml-4"
                  />
                </>
              ) : (
                "__________"
              )}
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
                onSuggestionSelected={onSuggestionSelected}
                alwaysRenderSuggestions={true}
                id="form"
              />
            )}
          </div>
          <div>?</div>
        </div>
      </div>
      {selected && (
        <div className="mb-6">
          <AnswerHeading>{selected.answerTypeLabel}</AnswerHeading>
          <Answer>{selected.answer}</Answer>
        </div>
      )}
    </>
  )
}

export default Form
