import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"
import { FormattedMessage } from "gatsby-plugin-intl"
import ReactMarkdown from "react-markdown"

const Answer = ({ data }) => {
  const colorStatusToggler = () => {
    if (!data) {
      return "#232831"
    }

    switch (data.answertype) {
      case "can":
        return "#039400"
      case "can-but":
        return "#B18000"
      case "can-not":
        return "#E02626"
      default:
        break
    }
  }

  const AnswerContent = styled.p`
    ${tw`text-base leading-relaxed`};
    color: ${colorStatusToggler()};
  `

  const AnswerSource = styled.div`
    ${tw`text-sm mb-3`};
    a {
      ${tw`font-bold underline`}
    }
  `

  function Paragraph(props) {
    return <p className="mb-2 clearfix">{props.children}</p>
  }

  function List(props) {
    return (
      <ul className="list-disc text-left pl-5 mb-2 clearfix mx-auto inline-block">
        {props.children}
      </ul>
    )
  }

  const FormattedAnswer = `**${data.answertypelabel}** ${data.answercontent}`

  return (
    <div className="mx-auto mb-4 max-w-4xl">
      <AnswerContent>
        {data.answercontent && (
          <>
            <ReactMarkdown
              source={FormattedAnswer}
              renderers={{ paragraph: Paragraph, list: List }}
            />
          </>
        )}
        {data.referencetitle && (
          <AnswerSource>
            <FormattedMessage id="common.source" />
            {": "}
            <a href={data.reference} target="_blank" rel="noopener noreferrer">
              {data.referencetitle}
            </a>
          </AnswerSource>
        )}
      </AnswerContent>
    </div>
  )
}
export default Answer
