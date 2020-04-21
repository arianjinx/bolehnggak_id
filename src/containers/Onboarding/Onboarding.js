import React, { useContext } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import { ActivityContext } from "../../context/ActivityContext"
import Popup from "../../components/Popup/Popup"
import styled from "@emotion/styled"
import tw from "twin.macro"

const Onboarding = () => {
  const { setIsShowOnboarding } = useContext(ActivityContext)

  const Content = styled.div`
    ${tw`mx-4 text-center lg:text-xl lg:py-4`}
  `

  const handleClick = () => {
    setIsShowOnboarding(false)
  }

  const handleClose = () => {
    setIsShowOnboarding(false)
  }

  return (
    <Popup
      heading={<FormattedMessage id="homepage.menu_bar" />}
      content={
        <Content>
          <FormattedMessage
            id="homepage.intro"
            values={{
              bold: (...chunks) => <strong>{chunks}</strong>,
            }}
          />
        </Content>
      }
      cta={
        <>
          {"> "}
          <FormattedMessage id="homepage.cta_start" />
          {" <"}
        </>
      }
      ctaColor="#94ff9e"
      onHandleClose={handleClose}
      onHandleClick={handleClick}
    />
  )
}

export default Onboarding
