import React, { useContext, useEffect } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import tw from "twin.macro"
import { FormattedMessage } from "gatsby-plugin-intl"
import Contribution from "../Contribution/Contribution"
import { ActivityContext } from "../../context/ActivityContext"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Footer = () => {
  const { isShowOnboarding, isLoading, setIsLoading } = useContext(
    ActivityContext
  )

  useEffect(() => {
    setIsLoading(false)
  }, [setIsLoading])

  const InnerContainer = styled.div`
    ${tw`relative px-6 clearfix lg:flex lg:flex-row`}
  `

  const Content = styled.div`
    ${tw`text-xs mb-2 lg:text-left lg:flex-1`}
    text-align: center;
    color: #5a677f;

    a {
      ${tw`underline`}
      color: #232831;
    }
  `

  const ContentLinks = styled.div`
    ${tw`text-xs mb-6`}
    text-align: center;

    a {
      ${tw`mx-2 underline`}
    }
  `

  const dt = new Date()

  return (
    <footer className="container mx-auto">
      {!isShowOnboarding && <Contribution />}
      <InnerContainer>
        {!isLoading && (
          <Content>
            &copy;
            {dt.getFullYear()}{" "}
            <FormattedMessage
              id="common.copyright"
              values={{
                "link-team": (...chunks) => <Link to="/about">{chunks}</Link>,
                "link-can-i-go": (...chunks) => (
                  <OutboundLink
                    href="https://canigo.sg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {chunks}
                  </OutboundLink>
                ),
              }}
            />
          </Content>
        )}
        <ContentLinks>
          <Link to="/about">
            <FormattedMessage id="about.title" />
          </Link>
          <Link to="/disclaimer">
            <FormattedMessage id="disclaimer.title" />
          </Link>
        </ContentLinks>
      </InnerContainer>
    </footer>
  )
}
export default Footer
