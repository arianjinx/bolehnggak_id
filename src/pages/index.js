import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import tw from "twin.macro"
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

  return (
    <Layout>
      <SEO isHomePage />
      <div className="container mx-auto">
        <InnerContainer>
          <Intro>
            Yuk cari tau hal yang <strong>boleh</strong> atau{" "}
            <strong>nggak boleh</strong> dilakuin selama masa Pembatasan Sosial
            Berskala Besar (PSBB)
          </Intro>
          <Form />
        </InnerContainer>
      </div>
    </Layout>
  )
}

export default IndexPage
