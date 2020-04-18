import React from "react"
import { useIntl } from "react-intl"
import styled from "@emotion/styled"
import tw from "twin.macro"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"
import Popup from "../components/popup"
import Contribution from "../components/contribution"

const IndexPage = () => {
  const InnerContainer = styled.div`
    ${tw`px-6 lg:px-10`}
  `
  const { formatMessage: f } = useIntl()
  console.log(
    `%c ${f({ id: "homepage.console_log" })}`,
    "background: #fed7d7; color: #000; font-size: 32px;"
  )

  return (
    <Layout>
      <SEO title={f({ id: "homepage.title" })} isHomePage />
      <div className="container mx-auto">
        <InnerContainer>
          <Form />
        </InnerContainer>
      </div>
      <Contribution />
      <Popup className="hidden" />
    </Layout>
  )
}

export default IndexPage
