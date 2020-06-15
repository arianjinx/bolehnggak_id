import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"
import cr from "../translations/constants"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Popup from "../components/Popup/Popup"
import { navigate } from "gatsby"

const PrivacyPolicyPage = () => {
  const Content = styled.div`
    ${tw`text-xs lg:text-base clearfix`}
    color: #232831;
    min-width: 180px;
  `

  const handleClose = () => {
    navigate("/")
  }

  const handleClick = () => {
    navigate("/")
  }

  return (
    <Layout>
      <SEO title={cr.privacy_policy.title} />
      <Popup
        heading={cr.privacy_policy.title}
        content={<Content>{cr.privacy_policy.content}</Content>}
        cta={cr.common.back_to_home}
        onHandleClose={handleClose}
        onHandleClick={handleClick}
      />
    </Layout>
  )
}

export default PrivacyPolicyPage
