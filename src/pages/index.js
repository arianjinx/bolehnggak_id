import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import tw from "twin.macro"
import IconRefresh from "../images/icon-refresh.svg"

const Intro = styled.p`
  ${tw`text-base md:text-xl max-w-xl mb-4 md:mb-6`}
`

const Heading = styled.h1`
  ${tw`text-3xl md:text-4xl font-bold mb-3 md:mb-6`};
`

const AnswerHeading = styled.h2`
  ${tw`text-3xl md:text-4xl font-bold mb-3 md:mb-6`};
`

const Answer = styled.div`
  ${tw`text-xl md:text-3xl`};
`

const IndexPage = () => (
  <Layout>
    <SEO title="Beranda" isHomePage />
    <div className="container mx-auto px-4 pt-10 sm:pt-12 lg:pt-24 xl:pt-48">
      <Intro>
        Yuk cari tau hal yang boleh atau nggak boleh dilakuin selama masa
        Pembatasan Sosial Berskala Besar (PSBB).
      </Intro>
      <Heading>Boleh Enggak aku</Heading>
      <AnswerHeading>Boleh</AnswerHeading>
      <Answer>
        <p>Boleh banget tuh.. Nonton Itaewon Class jangan lupa!</p>
      </Answer>
      <a href="#" className="block mt-4">
        <img src={IconRefresh} alt="" className="inline-block mr-2" />
        Acak pertanyaan
      </a>
    </div>
  </Layout>
)

export default IndexPage
