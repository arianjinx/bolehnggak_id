import React from "react"
import { navigate } from "gatsby"
import styled from "@emotion/styled"
import tw from "twin.macro"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Popup from "../components/Popup/Popup"

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
      <SEO title={`disclaimer`} />
      <Popup
        heading={`disclaimer.title`}
        content={<Content>disclaimer.content</Content>}
        cta={`common.back_to_home`}
        onHandleClose={handleClose}
        onHandleClick={handleClick}
      />
    </Layout>
  )
}

export default DisclaimerPage
