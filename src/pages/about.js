import React from "react"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import styled from "@emotion/styled"
import tw from "twin.macro"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Popup from "../components/Popup/Popup"
import { navigate } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const AboutPage = () => {
  const { formatMessage: f } = useIntl()

  const Content = styled.div`
    ${tw`text-sm lg:text-base text-left clearfix`}
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

  const handleClose = () => {
    navigate("/")
  }
  const handleClick = () => {
    navigate("/")
  }

  return (
    <Layout>
      <SEO title={f({ id: "about.title" })} />
      <Popup
        heading={<FormattedMessage id="about.title" />}
        content={
          <Content>
            <FormattedMessage
              id="about.content"
              values={{
                p: (...chunks) => <p>{chunks}</p>,
                "link-arian": (...chunks) => (
                  <OutboundLink
                    key="link-arian"
                    href="https://id.linkedin.com/in/arianpradana"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {chunks}
                  </OutboundLink>
                ),
                "link-wahyu": (...chunks) => (
                  <OutboundLink
                    key="link-wahyu"
                    href="https://id.linkedin.com/in/wahyudwiwidharto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {chunks}
                  </OutboundLink>
                ),
                "link-lintang": (...chunks) => (
                  <OutboundLink
                    key="link-lintang"
                    href="https://id.linkedin.com/in/lintanggustika"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {chunks}
                  </OutboundLink>
                ),
                "link-aswin": (...chunks) => (
                  <OutboundLink
                    key="link-aswin"
                    href="https://id.linkedin.com/in/aswinprasetyo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {chunks}
                  </OutboundLink>
                ),
                "link-rose": (...chunks) => (
                  <OutboundLink
                    key="link-rose"
                    href="https://id.linkedin.com/in/rose-kusuma-diah-tantri-228a71153"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {chunks}
                  </OutboundLink>
                ),
              }}
            />
          </Content>
        }
        cta={<FormattedMessage id="common.back_to_home" />}
        onHandleClose={handleClose}
        onHandleClick={handleClick}
      />
    </Layout>
  )
}

export default AboutPage
