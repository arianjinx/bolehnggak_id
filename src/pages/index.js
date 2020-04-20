import React, { useContext } from "react"
import { useIntl } from "react-intl"
import styled from "@emotion/styled"
import tw from "twin.macro"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Form from "../containers/Form/Form"
import Popup from "../components/Popup/Popup"
import { ActivityContext } from "../context/ActivityContext"

const IndexPage = () => {
  const { isShowOnboarding } = useContext(ActivityContext)
  const InnerContainer = styled.div`
    ${tw`pt-20 flex w-full`}
  `
  const { formatMessage: f } = useIntl()
  console.log(
    `%c ${f({ id: "common.console_log" })}`,
    "background: #fed7d7; color: #000; font-size: 32px;"
  )

  return (
    <Layout>
      <SEO title={f({ id: "homepage.title" })} isHomePage />
      {isShowOnboarding ? (
        <Popup />
      ) : (
        <div className="container mx-auto flex">
          <InnerContainer>
            <Form />
          </InnerContainer>
        </div>
      )}
    </Layout>
  )
}

export default IndexPage
