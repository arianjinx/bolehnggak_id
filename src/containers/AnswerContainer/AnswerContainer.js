import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"
import { FormattedMessage } from "gatsby-plugin-intl"

const AnswerContainer = ({ data }) => {
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

  const Answer = styled.p`
    ${tw`text-base leading-relaxed`};
    color: ${colorStatusToggler()};
  `

  const AnswerHeading = styled.strong`
    ${tw`text-base font-bold mb-3`};
  `

  const BreakLine = styled.br`
    content: "";
    ${tw`mb-1 block`}
  `

  const AnswerSource = styled.div`
    ${tw`text-sm mb-3`};
    a {
      ${tw`font-bold underline`}
    }
  `

  return (
    <div className="mx-auto mb-4 max-w-4xl">
      <Answer>
        <AnswerHeading>{data.answertypelabel}</AnswerHeading>{" "}
        {data.answercontent &&
          data.answercontent.split("\n").map((item, idx) => (
            <React.Fragment key={idx}>
              {item}
              <BreakLine />
            </React.Fragment>
          ))}
        <AnswerSource>
          <FormattedMessage id="common.source" />
          {": "}
          <a href={data.reference}>{data.referencetitle}</a>
        </AnswerSource>
      </Answer>
    </div>
  )
}
export default AnswerContainer
