import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"
import { FormattedMessage } from "react-intl"
import IconRefresh from "../images/icon-refresh.svg"

const Button = styled.button`
  ${tw`text-xs sm:text-lg mb-4 mx-auto px-2 py-1 box-border block`}
  box-shadow: 4px 4px 0px 0px rgba(35, 40, 49, 1);
  background-color: #ffc42e;
  border: 2px solid #000000;

  a {
    ${tw`underline`}
    color: #9a0bcc;
  }
`

const Icon = styled.img`
  ${tw`inline-block mr-2`}
`

const RandomizeButton = props => {
  const { onClick } = props
  return (
    <Button onClick={onClick}>
      <Icon src={IconRefresh} alt="" />
      <FormattedMessage id="homepage.randomize_questions" />
    </Button>
  )
}

export default RandomizeButton
