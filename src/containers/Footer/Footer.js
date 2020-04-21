import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import tw from "twin.macro"
import { FormattedMessage } from "gatsby-plugin-intl"
import Contribution from "../Contribution/Contribution"
import { ActivityContext } from "../../context/ActivityContext"

const Footer = () => {
  const { isShowOnboarding } = useContext(ActivityContext)

  const InnerContainer = styled.div`
    ${tw`relative px-6 clearfix`}
  `

  const Content = styled.div`
    ${tw`text-xs mb-2`}
    text-align: center;
    color: #232831;

    a {
      ${tw`underline`}
    }
  `

  const ContentLinks = styled.div`
    ${tw`text-xs mb-6`}
    text-align: center;
    color: #232831;

    a {
      ${tw`mx-2 underline`}
    }
  `

  const dt = new Date()

  return (
    <footer className="container mx-auto">
      {!isShowOnboarding && <Contribution />}
      <InnerContainer>
        <Content>
          &copy;
          {dt.getFullYear()}{" "}
          <FormattedMessage
            id="common.copyright"
            values={{
              "link-team": (...chunks) => <Link to="/about">{chunks}</Link>,
              "link-can-i-go": (...chunks) => (
                <a
                  href="https://canigo.sg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {chunks}
                </a>
              ),
            }}
          />
        </Content>
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
