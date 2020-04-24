import React, { useContext, useEffect } from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"
import { FormattedMessage } from "gatsby-plugin-intl"
import theme from "../../utils/tailwind.helpers"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { ActivityContext } from "../../context/ActivityContext"

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
  const { isLoading, setIsLoading } = useContext(ActivityContext)
  useEffect(() => {
    setIsLoading(false)
  }, [setIsLoading])
  return (
    !isLoading && (
      <Container>
        <FormattedMessage
          id="common.contribution"
          values={{
            anchor: (...chunks) => (
              <OutboundLink
                href="https://docs.google.com/spreadsheets/d/16skDPETqaL8RXGsfhDtWsNLLtOabbE76Tfw_IzmR0Bg/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                {chunks}
              </OutboundLink>
            ),
          }}
        />
      </Container>
    )
  )
}

export default Contribution
