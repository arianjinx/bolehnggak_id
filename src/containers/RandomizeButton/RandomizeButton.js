import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"
import Button from "../../components/Button/Button"
import { FormattedMessage } from "react-intl"
import IconRefresh from "../../images/icon-refresh.svg"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

const RandomizeButton = ({ onClick }) => {
  const Icon = styled.img`
    ${tw`inline-block mr-2 `}
  `

  const handleClick = () => {
    onClick && onClick()
    trackCustomEvent({
      category: "Randomize Questions",
      action: "Click",
      label: "Randomize Questions via Randomize Button",
    })
  }

  return (
    <Button onClick={handleClick}>
      <Icon src={IconRefresh} alt="" />
      <FormattedMessage id="homepage.randomize_questions" />
    </Button>
  )
}

export default RandomizeButton
