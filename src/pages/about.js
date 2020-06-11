import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Popup from "../components/Popup/Popup"
import { navigate } from "gatsby"

const AboutPage = () => {
  const Content = styled.div`
    ${tw`text-sm lg:text-base text-left clearfix`}
    color: #232831;

    p {
      ${tw`mb-4`}
    }

    p:last-child {
      ${tw`mb-0`}
    }

    a {
      ${tw`underline`}
    }
  `

  const handleClose = () => {
    navigate("/")
  }
  const handleClick = () => {
    navigate("/")
  }

  return (
    <Layout>
      <SEO title={`about.title`} />
      <Popup
        heading={`about.title`}
        content={<Content>{`about-content`}</Content>}
        cta={`common.back_to_home`}
        onHandleClose={handleClose}
        onHandleClick={handleClick}
      />
    </Layout>
  )
}

export default AboutPage
