import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"
import Button from "../../components/Button/Button"
import IconRefresh from "../../images/icon-refresh.svg"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import { keyframes } from "@emotion/core"
import cr from "../../translations/constants"

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
    animation: ${rotate} ${disabled && "0.5s ease infinite"};
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
      {cr.homepage.randomize_questions}
    </Button>
  )
}

export default RandomizeButton
