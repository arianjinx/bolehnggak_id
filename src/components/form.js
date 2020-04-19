import React, { useState } from "react"
import isMobile from "ismobilejs"
import Autosuggest from "react-autosuggest"
import { escapeRegexCharacters } from "../utils/utils"
import "./form.css"
import styled from "@emotion/styled"
import tw from "twin.macro"
import IconTriangle from "../images/icon-triangle.svg"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import RandomizeButton from "./randomize-button"

const Form = () => {
  const data = useStaticQuery(graphql`
    {
      allGoogleSheetCrowdsourceRow {
        nodes {
          id
          slug
          answertype
          answertypelabel
          activity
          answer
          answercontent
          reference
        }
      }
    }
  `).allGoogleSheetCrowdsourceRow.nodes

  const [isShowAutosuggest, setIsShowAutosuggest] = useState(false)
  const [value, setValue] = useState("")
  const [selected, setSelected] = useState(null)
  const [suggestions, setSuggestions] = useState(data)

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

  let focusInputOnSuggestionClick = true
  let autoFocus = true
  if (typeof window !== `undefined` && isMobile(navigator.userAgent).any) {
    focusInputOnSuggestionClick = false
    autoFocus = false
  }

  const inputProps = {
    placeholder: "Cari kegiatan",
    value,
    onChange,
    onBlur,
    autoFocus,
  }

  const Box = styled.div`
    ${tw`
    cursor-pointer 
    flex items-center 
    bg-white 
    box-border 
    px-3 
    py-2 
    justify-center 
    select-none
    `}
    min-width: 140px;
    border: 1px solid #232831;
    border-radius: 2px;
    color: ${selected ? "#232831" : "#54D8B8"};
    ${isShowAutosuggest && tw`rounded-b-none`};
  `

  const AnswerHeading = styled.h2`
    ${tw`text-base font-bold mb-3 `};
  `

  const Answer = styled.p`
    ${tw`text-base text-gray-700`};
  `

  const IconTriangleWrapper = styled.img`
    width: 8px;

    ${tw`inline-block ml-3`};

    ${isShowAutosuggest && `transform: rotate(180deg);`}
  `

  const BreakLine = styled.br`
    content: "";
    ${tw`mb-1 block`}
  `

  const bgStatusToggler = () => {
    if (!selected) {
      return "bg-white"
    }

    switch (selected.answertype) {
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

  const handleRandomize = () => {
    const randomId = Math.floor(Math.random() * (data.length - 0))
    setSelected(data[randomId])
  }

  return (
    <>
      <Helmet
        bodyAttributes={{
          class: bgStatusToggler(),
        }}
      />
      <div className="flex flex-row items-center font-medium flex-wrap text-base justify-center">
        <div className="mr-4 leading-tight ">Boleh nggak</div>
        <div className="flex flex-row items-center">
          <div className="my-3 relative mr-4">
            <Box onClick={handleBoxClick}>
              {selected ? selected.activity : "pilih aktivitas"}
              <IconTriangleWrapper src={IconTriangle} alt="" />
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
        <div className="mb-6 mx-auto max-w-3xl text-center">
          <AnswerHeading>{selected.answertypelabel}</AnswerHeading>
          <Answer>
            {!selected.answercontent &&
              selected.answer.split("\n").map((item, idx) => (
                <React.Fragment key={idx}>
                  {item}
                  <BreakLine />
                </React.Fragment>
              ))}
            {selected.answercontent &&
              selected.answercontent.split("\n").map((item, idx) => (
                <React.Fragment key={idx}>
                  {item}
                  <BreakLine />
                </React.Fragment>
              ))}
          </Answer>
        </div>
      )}
      <RandomizeButton onClick={handleRandomize} />
    </>
  )
}

export default Form
