import React, { useContext } from "react"
import { useIntl } from "react-intl"
import styled from "@emotion/styled"
import tw from "twin.macro"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Form from "../containers/Form/Form"
import useSiteMetadata from "../hooks/useSiteMetadata"
import { ActivityContext } from "../context/ActivityContext"

const AnswerPage = ({ pageContext, location }) => {
  const selected = location ? location.state.selected : pageContext
  const { siteUrl } = useSiteMetadata()
  const { setIsShowOnboarding } = useContext(ActivityContext)
  setIsShowOnboarding(false)

  const { formatMessage: f } = useIntl()

  const InnerContainer = styled.div`
    ${tw`pt-20 flex w-full`}
  `
  const title = `${f({ id: "common.question_page_title" })} ${
    selected.activity
  }?`

  return (
    <Layout>
      <SEO
        title={title}
        canonical={selected && `${siteUrl}/${selected.slug}/`}
      />
      <div className="container mx-auto flex">
        <InnerContainer>
          <Form selected={selected} />
        </InnerContainer>
      </div>
    </Layout>
  )
}

export default AnswerPage
