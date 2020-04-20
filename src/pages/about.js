import React from "react"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import tw from "twin.macro"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"

const AboutPage = () => {
  const { formatMessage: f } = useIntl()

  const Heading = styled.div`
    ${tw`text-base mb-4 clearfix`}
  `

  const Content = styled.div`
    ${tw`text-xs clearfix`}
    color: #232831;

    p {
      ${tw`mb-4`}
    }

    p:last-child {
      ${tw`mb-0`}
    }

    a {
      ${tw`underline`}
    }
  `

  const Back = styled.div`
    ${tw`text-sm underline clearfix outline-none focus:outline-none`}
  `

  return (
    <Layout>
      <SEO title={f({ id: "about.title" })} />
      <div className="container mx-auto">
        <Heading>
          <FormattedMessage id="about.title" />
        </Heading>
        <Content>
          <FormattedMessage
            id="about.content"
            values={{
              p: (...chunks) => <p>{chunks}</p>,
              "link-arian": (...chunks) => (
                <a
                  key="link-arian"
                  href="https://id.linkedin.com/in/arianpradana"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {chunks}
                </a>
              ),
              "link-wahyu": (...chunks) => (
                <a
                  key="link-wahyu"
                  href="https://twitter.com/wahyuwidharto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {chunks}
                </a>
              ),
              "link-lintang": (...chunks) => (
                <a
                  key="link-lintang"
                  href="https://id.linkedin.com/in/lintanggustika"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {chunks}
                </a>
              ),
              "link-rara": (...chunks) => (
                <a key="link-rara" href="/">
                  {chunks}
                </a>
              ),
              "link-aswin": (...chunks) => (
                <a
                  key="link-aswin"
                  href="https://id.linkedin.com/in/aswinprasetyo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {chunks}
                </a>
              ),
            }}
          />
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

export default AboutPage
