import React, { useState } from "react"
import isMobile from "ismobilejs"
import Autosuggest from "react-autosuggest"
import data from "../data/data"
import { escapeRegexCharacters } from "../utils/utils"
import "./form.css"
import styled from "@emotion/styled"
import tw from "twin.macro"
import IconTriangle from "../images/icon-triangle.svg"
import { Helmet } from "react-helmet"

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

  const focusInputOnSuggestionClick =
    navigator && !isMobile(navigator.userAgent).any

  const autoFocus = navigator && !isMobile(navigator.userAgent).any

  const inputProps = {
    placeholder: "Cari kegiatan",
    value,
    onChange,
    onBlur,
    autoFocus,
  }

  const Box = styled.div`
    ${tw`font-bold cursor-pointer flex items-center bg-white rounded box-border border-solid border border-gray-500 px-6 py-2 justify-center select-none`}
    min-width: 150px;
    ${isShowAutosuggest && tw`rounded-b-none`}
  `

  const AnswerHeading = styled.h2`
    ${tw`text-3xl lg:text-4xl font-bold mb-3 lg:mb-6`};
  `

  const Answer = styled.p`
    ${tw`text-lg text-gray-700`};
  `

  const IconTriangleWrapper = styled.img`
    ${tw`inline-block ml-4`};

    ${isShowAutosuggest && `transform: rotate(180deg);`}
  `

  const bgStatusToggler = () => {
    if (!selected) {
      return "bg-white"
    }

    switch (selected.answerType) {
      case "success":
        return "bg-green-200"
      case "warning":
        return "bg-yellow-200"
      case "alert":
        return "bg-red-200"
      default:
        break
    }
  }

  return (
    <>
      <Helmet
        bodyAttributes={{
          class: bgStatusToggler(),
        }}
      />
      <div className="flex flex-row items-center font-medium flex-wrap text-3xl lg:text-4xl">
        <div className="mr-4 leading-tight ">Boleh nggak aku</div>
        <div className="flex flex-row items-center">
          <div className="my-4 relative mr-4">
            <Box onClick={handleBoxClick}>
              {selected ? (
                <>
                  {selected.activity}
                  <IconTriangleWrapper src={IconTriangle} alt="" />
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
        <div className="mb-6 max-w-3xl">
          <AnswerHeading>{selected.answerTypeLabel}</AnswerHeading>
          <Answer>{selected.answer}</Answer>
        </div>
      )}
    </>
  )
}

export default Form
