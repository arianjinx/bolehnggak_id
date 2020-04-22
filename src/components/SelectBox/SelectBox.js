import Autosuggest from "react-autosuggest"
import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"
import "./SelectBox.css"
import IconTriangle from "../../images/icon-triangle.svg"
import theme from "../../utils/tailwind.helpers"

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
  boxPlaceholder,
}) => {
  const Box = styled.div`
    ${tw`
    cursor-pointer 
    flex 
    items-center 
    text-left
    bg-white 
    box-border 
    px-3 
    py-2
    lg:py-3
    justify-between 
    select-none
    text-base
    lg:text-2xl
    `}
    min-width: 140px;
    border: 1px solid #232831;
    border-radius: 2px;
    color: ${selected ? "#232831" : "#5471D8"};
    min-height: 48px;
    ${isShowAutosuggest && tw`rounded-b-none`};

    @media (min-width: ${theme.screens.lg}) {
      border-width: 3px;
      border-radius: 4px;
      ${isShowAutosuggest && tw`rounded-b-none`};
    }
  `

  const IconTriangleWrapper = styled.img`
    width: 8px;
    ${tw`inline-block ml-3`};
    ${isShowAutosuggest && `transform: rotate(180deg);`}
  `
  return (
    <>
      <Box onClick={handleBoxClick}>
        {selected ? selected.activity : boxPlaceholder}
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
