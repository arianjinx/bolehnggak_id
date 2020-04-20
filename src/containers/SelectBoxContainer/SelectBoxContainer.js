import React, { useState, useContext } from "react"
import SelectBox from "../../components/SelectBox/SelectBox"
import { escapeRegexCharacters } from "../../utils/utils"
import isMobile from "ismobilejs"
import { ActivityContext } from "../../context/ActivityContext"
import { useIntl } from "gatsby-plugin-intl"

const SelectBoxContainer = ({ data }) => {
  const { formatMessage: f } = useIntl()
  const {
    isShowAutosuggest,
    setIsShowAutosuggest,
    selected,
    setSelected,
  } = useContext(ActivityContext)
  const [value, setValue] = useState("")
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
    placeholder: f({ id: "homepage.type_activity" }),
    value,
    onChange,
    onBlur,
    autoFocus,
  }

  return (
    <SelectBox
      data={data}
      isShowAutosuggest={isShowAutosuggest}
      handleBoxClick={handleBoxClick}
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      boxPlaceholder={f({ id: "homepage.choose_activity" })}
      focusInputOnSuggestionClick={focusInputOnSuggestionClick}
      onSuggestionSelected={onSuggestionSelected}
      selected={selected}
    />
  )
}
export default SelectBoxContainer
