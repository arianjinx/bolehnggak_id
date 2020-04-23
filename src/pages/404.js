import React from "react"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import { navigate } from "gatsby"
import styled from "@emotion/styled"
import tw from "twin.macro"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Popup from "../components/Popup/Popup"

const NotFoundPage = () => {
  const { formatMessage: f } = useIntl()

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
      <SEO title={f({ id: "404.title" })} />
      <Popup
        heading={<FormattedMessage id="404.title" />}
        content={
          <Content>
            <FormattedMessage id="404.content" />
          </Content>
        }
        cta={<FormattedMessage id="common.back_to_home" />}
        onHandleClose={handleClose}
        onHandleClick={handleClick}
      />
    </Layout>
  )
}

export default NotFoundPage
