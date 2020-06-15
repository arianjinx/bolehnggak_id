import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import tw from "twin.macro"
import Contribution from "../Contribution/Contribution"
import { ActivityState } from "../../context/ActivityContext"
import cr from "../../translations/constants"

const Footer = () => {
  const { isShowOnboarding } = useContext(ActivityState)

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
        <Content>
          &copy;
          {dt.getFullYear()} {cr.common.copyright}
        </Content>
        <ContentLinks>
          <Link to="/about">{cr.about.title}</Link>
          <Link to="/disclaimer">{cr.disclaimer.title}</Link>
        </ContentLinks>
      </InnerContainer>
    </footer>
  )
}
export default Footer
