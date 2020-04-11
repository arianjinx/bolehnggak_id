import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import tw from "twin.macro"
import IconRefresh from "../images/icon-refresh.svg"

const Intro = styled.p`
  ${tw`text-base lg:text-xl max-w-xl mb-4 lg:mb-6`}
`

const Heading = styled.h1`
  ${tw`text-3xl lg:text-4xl font-bold mb-3 lg:mb-6`};
`

const AnswerHeading = styled.h2`
  ${tw`text-3xl lg:text-4xl font-bold mb-3 lg:mb-6`};
`

const Answer = styled.div`
  ${tw`text-xl md:text-3xl`};
`

const isAnswered = false

const IndexPage = () => (
  <Layout>
    <SEO title="Beranda" isHomePage />
    <div className="container mx-auto px-6 lg:px-10 pt-10 lg:pt-40">
      <Intro>
        Yuk cari tau hal yang boleh atau nggak boleh dilakuin selama masa
        Pembatasan Sosial Berskala Besar (PSBB)
      </Intro>
      <Heading>Boleh nggak aku</Heading>
      {isAnswered && (
        <>
          <AnswerHeading>Boleh</AnswerHeading>
          <Answer>
            <p>Boleh banget tuh.. Nonton Itaewon Class jangan lupa!</p>
          </Answer>
        </>
      )}
      <a href="#" className="inline-block mt-4">
        <img src={IconRefresh} alt="" className="inline-block mr-2" />
        Acak pertanyaan
      </a>
    </div>
  </Layout>
)

export default IndexPage
