import React from "react"
import { FormattedMessage, useIntl } from "react-intl"
import styled from "@emotion/styled"
import tw from "twin.macro"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"

const IndexPage = () => {
  const InnerContainer = styled.div`
    ${tw`px-6 lg:px-10`}
  `
  const Intro = styled.p`
    ${tw`text-base lg:text-xl max-w-xl mb-4 lg:mb-6`}

    strong {
      ${tw`font-bold`}
    }
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
          <Intro>
            <FormattedMessage
              id="homepage.intro"
              values={{
                bold: (...chunks) => <strong>{chunks}</strong>,
              }}
            />
          </Intro>
          <Form />
        </InnerContainer>
      </div>
    </Layout>
  )
}

export default IndexPage
