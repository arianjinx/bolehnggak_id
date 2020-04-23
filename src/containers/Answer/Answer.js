import React from "react"
import { useIntl } from "react-intl"
import styled from "@emotion/styled"
import tw from "twin.macro"
import { FormattedMessage } from "gatsby-plugin-intl"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import ReactMarkdown from "react-markdown"
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share"
import useSiteMetadata from "../../hooks/useSiteMetadata"

const Answer = ({ data }) => {
  const { url } = useSiteMetadata()
  const { formatMessage: f } = useIntl()
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

  const AnswerContent = styled.div`
    ${tw`text-base lg:text-2xl leading-relaxed clearfix mb-4`};
    color: ${colorStatusToggler()};
  `

  const AnswerSource = styled.div`
    ${tw`text-sm mb-3`};
    a {
      ${tw`font-bold underline`}
    }
  `

  const SocialButton = styled.div`
    ${tw`inline-block mx-2 focus:outline-none`}
    font-size: 0;
    box-shadow: 4px 4px 0px 0px rgba(35, 40, 49, 1);
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
    <div className="mx-auto mb-6 max-w-4xl">
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
            <OutboundLink
              href={data.reference}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.referencetitle}
            </OutboundLink>
          </AnswerSource>
        )}
      </AnswerContent>
      <div className="mx-auto max-w-4xl clearfix">
        <SocialButton>
          <FacebookShareButton
            url={`${url}/${data.slug}`}
            quote={`${f({ id: "common.question_page_title" })} ${
              data.activity
            }?`}
          >
            <FacebookIcon size={43} round={false} />
          </FacebookShareButton>
        </SocialButton>
        <SocialButton>
          <TwitterShareButton
            url={`${url}/${data.slug}`}
            title={`${f({ id: "common.question_page_title" })} ${
              data.activity
            }?`}
            hashtags={[f({ id: "common.hashtag" })]}
          >
            <TwitterIcon size={43} round={false} />
          </TwitterShareButton>
        </SocialButton>
      </div>
    </div>
  )
}
export default Answer
