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

  const Question = styled.h1`
    ${tw`font-medium text-3xl lg:text-4xl mb-3 lg:mb-6`};
  `

  const AnswerHeading = styled.h2`
    ${tw`text-3xl lg:text-4xl font-bold mb-3 lg:mb-6`};
  `

  const Answer = styled.div`
    ${tw`text-xl md:text-3xl`};
  `

  const isAnswered = false

  return (
    <Layout>
      <SEO title="Beranda" isHomePage />
      <div className="container mx-auto px-6 lg:px-10 pt-10 lg:pt-40">
        <Intro>
          Yuk cari tau hal yang <strong className="font-medium">boleh</strong>{" "}
          atau <strong className="font-medium">nggak boleh</strong> dilakuin
          selama masa Pembatasan Sosial Berskala Besar (PSBB)
        </Intro>
        <Question className="flex flex-row items-center max-w-2xl flex-wrap">
          <div className="mr-4 leading-tight">Boleh nggak aku</div>
          <Form />
          <div>?</div>
        </Question>
        {isAnswered && (
          <>
            <AnswerHeading>Boleh</AnswerHeading>
            <Answer>
              <p>Boleh banget tuh.. Nonton Itaewon Class jangan lupa!</p>
            </Answer>
          </>
        )}
        <a href="#" className="inline-block underline clearfix">
          <img src={IconRefresh} alt="" className="inline-block mr-2" />
          Acak pertanyaan
        </a>
      </div>
    </Layout>
  )
}

export default IndexPage
