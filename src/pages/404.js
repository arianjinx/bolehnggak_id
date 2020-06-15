import React from "react"
import { navigate } from "gatsby"
import styled from "@emotion/styled"
import tw from "twin.macro"
import cr from "../translations/constants"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Popup from "../components/Popup/Popup"

const NotFoundPage = () => {
  const Content = styled.div`
    ${tw`text-sm lg:text-base clearfix`}
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
      <SEO title={cr.notfound.title} />
      <Popup
        heading={cr.notfound.title}
        content={<Content>{cr.notfound.content}</Content>}
        cta={cr.common.back_to_home}
        onHandleClose={handleClose}
        onHandleClick={handleClick}
      />
    </Layout>
  )
}

export default NotFoundPage
