import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"
import theme from "../../utils/tailwind.helpers"

const Container = styled.div`
  ${tw`text-xs lg:text-base mb-8 mx-auto w-full p-2 box-border`}
  box-shadow: 4px 4px 0px 0px rgba(35, 40, 49, 1);
  width: 100%;
  max-width: 210px;
  background: #cecaff;
  border: 2px solid #000000;

  @media (min-width: ${theme.screens.lg}) {
    max-width: 402px;
  }

  a {
    ${tw`underline`}
    color: #9a0bcc;
  }
`

const Contribution = () => {
  return <Container>common.contribution</Container>
}

export default Contribution
