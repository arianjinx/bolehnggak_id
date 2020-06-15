import React from "react"
import { navigate } from "gatsby"
import styled from "@emotion/styled"
import tw from "twin.macro"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Popup from "../components/Popup/Popup"
import cr from "../translations/constants"

const DisclaimerPage = () => {
  const Content = styled.ul`
    ${tw`text-xs lg:text-base list-disc pl-4 clearfix`}
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
      <SEO title={cr.disclaimer.title} />
      <Popup
        heading={cr.disclaimer.title}
        content={<Content>{cr.disclaimer.content}</Content>}
        cta={cr.common.back_to_home}
        onHandleClose={handleClose}
        onHandleClick={handleClick}
      />
    </Layout>
  )
}

export default DisclaimerPage
