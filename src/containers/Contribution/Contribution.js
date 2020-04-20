import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"
import { FormattedMessage } from "gatsby-plugin-intl"

const Container = styled.div`
  ${tw`text-xs mb-8 mx-auto w-full p-2 box-border`}
  box-shadow: 4px 4px 0px 0px rgba(35, 40, 49, 1);
  width: 100%;
  max-width: 210px;
  background: #cecaff;
  border: 2px solid #000000;

  a {
    ${tw`underline`}
    color: #9a0bcc;
  }
`

const Contribution = () => {
  return (
    <Container>
      <FormattedMessage
        id="common.contribution"
        values={{
          anchor: (...chunks) => (
            <a
              href="https://docs.google.com/spreadsheets/d/16skDPETqaL8RXGsfhDtWsNLLtOabbE76Tfw_IzmR0Bg/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              {chunks}
            </a>
          ),
        }}
      />
    </Container>
  )
}

export default Contribution
