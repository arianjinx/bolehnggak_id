import React from "react"
import { useIntl } from "react-intl"
import styled from "@emotion/styled"
import tw from "twin.macro"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import FormContainer from "../containers/FormContainer/FormContainer"
import Popup from "../components/Popup/Popup"
import ActivityProvider from "../context/ActivityContext"

const IndexPage = () => {
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
      <div className="container mx-auto flex">
        <ActivityProvider>
          <InnerContainer>
            <FormContainer />
          </InnerContainer>
        </ActivityProvider>
      </div>
      <Popup className="hidden" />
    </Layout>
  )
}

export default IndexPage
