import React from "react"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import tw from "twin.macro"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"

const PrivacyPolicyPage = () => {
  const { formatMessage: f } = useIntl()

  const Heading = styled.div`
    ${tw`text-base mb-4 clearfix`}
  `

  const Content = styled.div`
    ${tw`text-xs clearfix`}
    color: #232831;
  `

  const Back = styled.div`
    ${tw`text-sm underline clearfix outline-none focus:outline-none`}
  `
  return (
    <Layout>
      <SEO title={f({ id: "privacy_policy.title" })} />
      <div className="container mx-auto">
        <Heading>
          <FormattedMessage id="privacy_policy.title" />
        </Heading>
        <Content>
          <FormattedMessage id="privacy_policy.content" />
        </Content>
        <Back>
          <Link to="/">
            <FormattedMessage id="common.back_to_home" />
          </Link>
        </Back>
      </div>
    </Layout>
  )
}

export default PrivacyPolicyPage
