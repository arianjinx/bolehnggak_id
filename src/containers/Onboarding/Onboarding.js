import React, { useContext } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import { ActivityContext } from "../../context/ActivityContext"
import Popup from "../../components/Popup/Popup"
import styled from "@emotion/styled"
import tw from "twin.macro"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

const Onboarding = ({ isShowOnboarding }) => {
  const { setIsShowOnboarding } = useContext(ActivityContext)

  const Content = styled.div`
    ${tw`mx-4 text-center lg:text-xl lg:py-4`}
  `

  const handleClick = () => {
    setIsShowOnboarding(false)
    trackCustomEvent({
      category: "Onboarding Popup",
      action: "Click",
      label: "Close Onboarding Popup via CTA",
    })
  }

  const handleClose = () => {
    setIsShowOnboarding(false)
    trackCustomEvent({
      category: "Onboarding Popup",
      action: "Click",
      label: "Close Onboarding Popup via Close Button",
    })
  }

  if (!isShowOnboarding) {
    return false
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
        <span className="uppercase">
          {"> "}
          <FormattedMessage id="homepage.cta_start" />
          {" <"}
        </span>
      }
      ctaColor="#94ff9e"
      onHandleClose={handleClose}
      onHandleClick={handleClick}
    />
  )
}

export default Onboarding
