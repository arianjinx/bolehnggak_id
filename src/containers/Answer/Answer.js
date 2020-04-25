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
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share"
import useSiteMetadata from "../../hooks/useSiteMetadata"

const Answer = ({ data }) => {
  const { siteUrl } = useSiteMetadata()
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
    ${tw`text-sm mb-2`};
    a {
      ${tw`font-bold underline`}
    }
  `

  const DisclaimerSource = styled.div`
    ${tw`text-xs lg:text-sm mt-6 mb-2 max-w-xl mx-auto`};
    opacity: 0.6;
    a {
      ${tw`underline`}
    }
  `

  const ShareText = styled.div`
    ${tw`text-sm font-bold text-black text-center mb-6 mt-0 clearfix`}
  `

  const SocialButton = styled.div`
    ${tw`inline-block mx-2 focus:outline-none overflow-hidden p-0`}
    border: 2px solid #000000;
    font-size: 0;
    box-shadow: 4px 4px 0px 0px rgba(35, 40, 49, 1);

    & > * {
      ${tw`appearance-none cursor-pointer`}
      font-size: 0;
      margin-left: -1px;
      margin-top: -1px;
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
        {data.referencetitle ? (
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
        ) : (
          <DisclaimerSource>
            <span className="font-bold">
              <FormattedMessage id="disclaimer.title" />
            </span>
            {": "}
            <FormattedMessage id="common.disclaimer_no_reference" />{" "}
            <OutboundLink
              href={f({ id: "common.disclaimer_no_reference_url" })}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormattedMessage id="common.disclaimer_no_reference_link" />
            </OutboundLink>
          </DisclaimerSource>
        )}
      </AnswerContent>
      <div className="mx-auto max-w-4xl clearfix">
        <ShareText>
          <FormattedMessage id="common.share" />
        </ShareText>
        <div className="clearfix">
          <SocialButton>
            <FacebookShareButton
              url={`${siteUrl}/${data.slug}`}
              quote={`${f({ id: "common.question_page_title" })} ${
                data.activity
              }?`}
            >
              <FacebookIcon size={43} round={false} />
            </FacebookShareButton>
          </SocialButton>
          <SocialButton>
            <TwitterShareButton
              url={`${siteUrl}/${data.slug}`}
              title={`${f({ id: "common.question_page_title" })} ${
                data.activity
              }?`}
              hashtags={[f({ id: "common.hashtag" })]}
            >
              <TwitterIcon size={43} round={false} />
            </TwitterShareButton>
          </SocialButton>
          <SocialButton>
            <WhatsappShareButton
              url={`${siteUrl}/${data.slug}`}
              title={`${f({ id: "common.question_page_title" })} ${
                data.activity
              }?`}
              separator=" — "
            >
              <WhatsappIcon size={43} round={false} />
            </WhatsappShareButton>
          </SocialButton>
        </div>
      </div>
    </div>
  )
}
export default Answer
