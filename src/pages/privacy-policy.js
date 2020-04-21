import React from "react"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import styled from "@emotion/styled"
import tw from "twin.macro"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Popup from "../components/Popup/Popup"
import { navigate } from "gatsby"

const PrivacyPolicyPage = () => {
  const { formatMessage: f } = useIntl()

  const Content = styled.div`
    ${tw`text-xs lg:text-base clearfix`}
    color: #232831;
  `

  const handleClose = () => {
    navigate("/")
  }

  const handleClick = () => {
    navigate("/")
  }

  return (
    <Layout>
      <SEO title={f({ id: "privacy_policy.title" })} />
      <Popup
        heading={<FormattedMessage id="privacy_policy.title" />}
        content={
          <Content>
            <FormattedMessage id="privacy_policy.content" />
          </Content>
        }
        cta={<FormattedMessage id="common.back_to_home" />}
        onHandleClose={handleClose}
        onHandleClick={handleClick}
      />
    </Layout>
  )
}

export default PrivacyPolicyPage
