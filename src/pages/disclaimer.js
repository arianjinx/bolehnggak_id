import React from "react"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import { navigate } from "gatsby"
import styled from "@emotion/styled"
import tw from "twin.macro"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Popup from "../components/Popup/Popup"

const DisclaimerPage = () => {
  const { formatMessage: f } = useIntl()

  const Content = styled.ul`
    ${tw`text-xs list-disc pl-4 clearfix`}
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
      <SEO title={f({ id: "disclaimer.title" })} />
      <div className="container mx-auto">
        <Popup
          heading={<FormattedMessage id="disclaimer.title" />}
          content={
            <Content>
              <FormattedMessage
                id="disclaimer.content"
                values={{
                  li: (...chunks) => <li>{chunks}</li>,
                }}
              />
            </Content>
          }
          cta={<FormattedMessage id="common.back_to_home" />}
          onHandleClose={handleClose}
          onHandleClick={handleClick}
        />
      </div>
    </Layout>
  )
}

export default DisclaimerPage
