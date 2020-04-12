import React, { useState } from "react"
import isMobile from "ismobilejs"
import Autosuggest from "react-autosuggest"
import { escapeRegexCharacters } from "../utils/utils"
import "./form.css"
import styled from "@emotion/styled"
import tw from "twin.macro"
import theme from "../utils/tailwind.helpers"
import IconTriangle from "../images/icon-triangle.svg"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import IconRefresh from "../images/icon-refresh.svg"
import IconSucces from "../images/icon-success.svg"
import IconWarning from "../images/icon-warning.svg"
import IconAlert from "../images/icon-alert.svg"

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
    font-bold 
    cursor-pointer 
    flex items-center 
    bg-white 
    rounded 
    box-border 
    border-solid 
    border 
    border-gray-500 
    px-3 
    lg:px-6 
    py-2 
    justify-center 
    select-none
    `}
    min-width: 140px;
    @media (min-width: ${theme.screens.lg}) {
      min-width: 290px;
    }
    ${isShowAutosuggest && tw`rounded-b-none`}
  `

  const AnswerHeading = styled.h2`
    ${tw`text-base lg:text-4xl font-bold mb-3 lg:mb-6`};
  `

  const Answer = styled.p`
    ${tw`text-base text-gray-700`};
  `

  const IconTriangleWrapper = styled.img`
    width: 8px;
    @media (min-width: ${theme.screens.lg}) {
      width: 16px;
    }

    ${tw`inline-block ml-3 lg:ml-4`};

    ${isShowAutosuggest && `transform: rotate(180deg);`}
  `

  const BreakLine = styled.br`
    content: "";
    ${tw`mb-1 lg:mb-2 block`}
  `

  const IconStatus = styled.img`
    width: 16px;
    @media (min-width: ${theme.screens.lg}) {
      width: 30px;
    }

    ${tw`inline-block ml-3 lg:ml-4 -mt-1 align-middle`};
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

  const iconStatusToggler = () => {
    switch (selected.answertype) {
      case "success":
        return IconSucces
      case "warning":
        return IconWarning
      case "alert":
        return IconAlert
      default:
        break
    }
  }

  const handleRandomize = () => {
    const randomId = Math.floor(Math.random() * (data.length - 0)) + 0
    setSelected(data[randomId])
  }

  return (
    <>
      <Helmet
        bodyAttributes={{
          class: bgStatusToggler(),
        }}
      />
      <div className="flex flex-row items-center font-medium flex-wrap text-base lg:text-4xl">
        <div className="mr-4 leading-tight ">Boleh nggak aku</div>
        <div className="flex flex-row items-center">
          <div className="my-3 lg:my-4 relative mr-4">
            <Box onClick={handleBoxClick}>
              {selected ? (
                selected.activity
              ) : (
                <span className="font-normal text-gray-500">
                  pilih aktivitas
                </span>
              )}
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
        <div className="mb-6 max-w-3xl">
          <AnswerHeading>
            {selected.answertypelabel}
            <IconStatus src={iconStatusToggler()} alt="" />
          </AnswerHeading>
          <Answer>
            {selected.answer.split("\n").map((item, idx) => (
              <React.Fragment key={idx}>
                {item}
                <BreakLine />
              </React.Fragment>
            ))}
            <a
              href={selected.reference}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-black font-semibold text-sm lg:text-base clearfix outline-none focus:outline-none"
              onClick={handleRandomize}
            >
              Link rujukan
            </a>
          </Answer>
        </div>
      )}
      <button
        className="inline-block underline clearfix outline-none focus:outline-none"
        onClick={handleRandomize}
      >
        <img src={IconRefresh} alt="" className="inline-block mr-2" />
        Acak pertanyaan
      </button>
    </>
  )
}

export default Form
