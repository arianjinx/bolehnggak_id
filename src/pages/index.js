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

const IndexPage = ({ path, pageContext }) => {
  const { url } = useSiteMetadata()
  const { data, isShowOnboarding, setIsShowOnboarding } = useContext(
    ActivityContext
  )

  const { formatMessage: f } = useIntl()

  const InnerContainer = styled.div`
    ${tw`pt-20 flex w-full`}
    ${isShowOnboarding && "display: none;"}
  `

  console.log(
    `%c ${f({ id: "common.console_log" })}`,
    "background: #fed7d7; color: #000; font-size: 32px;"
  )

  useEffect(() => {
    if (path === "/") {
      setIsShowOnboarding(true)
    }
  }, [setIsShowOnboarding, path])

  const title =
    path === "/"
      ? f({ id: "homepage.title" })
      : `${f({ id: "common.question_page_title" })} ${pageContext.activity}?`

  return (
    <Layout>
      <SEO
        title={title}
        isHomePage={path === "/"}
        canonical={pageContext ? `${url}/${pageContext.slug}` : url}
      />
      <div className="container mx-auto flex">
        <Onboarding isShowOnboarding={isShowOnboarding} />
        <InnerContainer>
          <Form data={data} selected={path === "/" ? null : pageContext} />
        </InnerContainer>
      </div>
    </Layout>
  )
}

export default IndexPage
