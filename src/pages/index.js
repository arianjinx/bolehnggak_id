import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import tw from "twin.macro"
import IconRefresh from "../images/icon-refresh.svg"
import Form from "../components/form"

const IndexPage = () => {
  const Intro = styled.p`
    ${tw`text-base lg:text-xl max-w-xl mb-4 lg:mb-6`}
  `

  return (
    <Layout>
      <SEO title="Beranda" isHomePage />
      <div className="container mx-auto px-6 lg:px-10 pt-10 lg:pt-40">
        <Intro>
          Yuk cari tau hal yang <strong className="font-medium">boleh</strong>{" "}
          atau <strong className="font-medium">nggak boleh</strong> dilakuin
          selama masa Pembatasan Sosial Berskala Besar (PSBB)
        </Intro>
        <Form />
        <a href="#" className="inline-block underline clearfix">
          <img src={IconRefresh} alt="" className="inline-block mr-2" />
          Acak pertanyaan
        </a>
      </div>
    </Layout>
  )
}

export default IndexPage
