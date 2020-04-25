import React, { useContext, useEffect } from "react"
import { useIntl } from "react-intl"
import styled from "@emotion/styled"
import tw from "twin.macro"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Form from "../containers/Form/Form"
import Onboarding from "../containers/Onboarding/Onboarding"
import { ActivityContext } from "../context/ActivityContext"
import useSiteMetadata from "../hooks/useSiteMetadata"

const IndexPage = () => {
  const { siteUrl } = useSiteMetadata()
  const { isShowOnboarding } = useContext(ActivityContext)

  const { formatMessage: f } = useIntl()

  const InnerContainer = styled.div`
    ${tw`pt-20 flex w-full`}
    ${isShowOnboarding && "display: none;"}
  `

  useEffect(() => {
    console.log(
      `%c ${f({ id: "common.console_log" })}`,
      "background: #fed7d7; color: #000; font-size: 32px;"
    )
  }, [f])

  const title = f({ id: "homepage.title" })

  return (
    <Layout>
      <SEO title={title} isHomePage={true} canonical={siteUrl} />
      <div className="container mx-auto flex">
        {isShowOnboarding ? (
          <Onboarding isShowOnboarding={isShowOnboarding} />
        ) : (
          <InnerContainer>
            <Form selected={null} />
          </InnerContainer>
        )}
      </div>
    </Layout>
  )
}

export default IndexPage
