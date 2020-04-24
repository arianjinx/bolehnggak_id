import React, { useContext, useEffect } from "react"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import { navigate } from "gatsby"
import styled from "@emotion/styled"
import tw from "twin.macro"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Popup from "../components/Popup/Popup"
import { ActivityContext } from "../context/ActivityContext"

const DisclaimerPage = () => {
  const { isLoading, setIsLoading } = useContext(ActivityContext)
  const { formatMessage: f } = useIntl()

  useEffect(() => {
    setIsLoading(false)
  }, [setIsLoading])

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
      <SEO title={f({ id: "disclaimer.title" })} />
      <Popup
        heading={<FormattedMessage id="disclaimer.title" />}
        content={
          !isLoading && (
            <Content>
              <FormattedMessage
                id="disclaimer.content"
                values={{
                  li: (...chunks) => <li>{chunks}</li>,
                }}
              />
            </Content>
          )
        }
        cta={<FormattedMessage id="common.back_to_home" />}
        onHandleClose={handleClose}
        onHandleClick={handleClick}
      />
    </Layout>
  )
}

export default DisclaimerPage
