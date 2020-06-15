import React, { useContext } from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"
import cr from "../translations/constants"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Form from "../containers/Form/Form"
import useSiteMetadata from "../hooks/useSiteMetadata"
import { ActivitySetter } from "../context/ActivityContext"

const AnswerPage = ({ pageContext }) => {
  const { siteUrl } = useSiteMetadata()
  const { setIsShowOnboarding } = useContext(ActivitySetter)
  setIsShowOnboarding(false)

  const InnerContainer = styled.div`
    ${tw`pt-20 flex w-full`}
  `
  const title = `${cr.common.question_page_title} ${pageContext.activity}?`

  return (
    <Layout>
      <SEO
        title={title}
        canonical={pageContext && `${siteUrl}/${pageContext.slug}/`}
      />
      <div className="container mx-auto flex">
        <InnerContainer>
          <Form selected={pageContext} />
        </InnerContainer>
      </div>
    </Layout>
  )
}

export default AnswerPage
