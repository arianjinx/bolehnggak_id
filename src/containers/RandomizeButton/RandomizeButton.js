import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"
import Button from "../../components/Button/Button"
import { FormattedMessage } from "react-intl"
import IconRefresh from "../../images/icon-refresh.svg"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import { keyframes } from "@emotion/core"

const RandomizeButton = ({ onClick, disabled }) => {
  const rotate = keyframes`
    from {
      transform: rotate(0);
    }
  
    to {
      transform: rotate(360deg);
    }
  `

  const Icon = styled.img`
    ${tw`inline-block mr-2 `}
    animation: ${rotate} ${disabled && "1s ease infinite"};
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
    <Button onClick={handleClick} disabled={disabled}>
      <Icon src={IconRefresh} alt="" />
      <FormattedMessage id="homepage.randomize_questions" />
    </Button>
  )
}

export default RandomizeButton
