import Autosuggest from "react-autosuggest"
import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"
import "./SelectBox.css"
import IconTriangle from "../../images/icon-triangle.svg"
import { useIntl } from "gatsby-plugin-intl"

const SelectBox = ({
  isShowAutosuggest,
  handleBoxClick,
  suggestions,
  onSuggestionsFetchRequested,
  onSuggestionsClearRequested,
  getSuggestionValue,
  renderSuggestion,
  inputProps,
  focusInputOnSuggestionClick,
  onSuggestionSelected,
  selected,
}) => {
  const { formatMessage: f } = useIntl()
  const Box = styled.div`
    ${tw`
    cursor-pointer 
    flex items-center 
    bg-white 
    box-border 
    px-3 
    py-1
    justify-center 
    select-none
    `}
    min-width: 140px;
    border: 1px solid #232831;
    border-radius: 2px;
    color: ${selected ? "#232831" : "#54D8B8"};
    ${isShowAutosuggest && tw`rounded-b-none`};
  `

  const IconTriangleWrapper = styled.img`
    width: 8px;
    ${tw`inline-block ml-3`};
    ${isShowAutosuggest && `transform: rotate(180deg);`}
  `
  return (
    <>
      <Box onClick={handleBoxClick}>
        {selected ? selected.activity : f({ id: "homepage.choose_activity" })}
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
        />
      )}
    </>
  )
}

export default SelectBox
