import React, { useContext, useState } from "react"
import "../../components/SelectBox/SelectBox.css"
import styled from "@emotion/styled"
import tw from "twin.macro"
import { Helmet } from "react-helmet"
import RandomizeButton from "../RandomizeButton/RandomizeButton"
import SelectBoxContainer from "../SelectBoxContainer/SelectBoxContainer"
import { FormattedMessage } from "gatsby-plugin-intl"
import Answer from "../Answer/Answer"
import { navigate } from "gatsby"
import { ActivityContext } from "../../context/ActivityContext"

const Form = ({ selected }) => {
  const { data } = useContext(ActivityContext)
  const [disabled, setDisabled] = useState(false)
  const bgStatusToggler = () => {
    if (!selected) {
      return "bg-white"
    }
    return selected.answertype
  }

  const handleRandomize = () => {
    const randomId = Math.floor(Math.random() * data.length)
    setDisabled(true)
    navigate(`/${data[randomId].slug}`, { state: { selected: data[randomId] } })
  }

  const Container = styled.div`
    ${tw`flex flex-row items-center flex-wrap text-base justify-center items-center w-full text-center lg:text-4xl`}
  `

  const InnerContainer = styled.div`
    ${tw`flex flex-col flex-wrap items-center justify-center w-full px-4`}
  `

  const FormBlock = styled.div`
    ${tw`flex flex-wrap items-center justify-center w-full mb-3`}
  `

  const Question = styled.div`
    ${tw`leading-tight mr-2 lg:font-medium`}
  `
  return (
    <>
      <Helmet
        bodyAttributes={{
          class: bgStatusToggler(),
        }}
      />
      <Container>
        <InnerContainer>
          <FormBlock>
            <Question>
              <FormattedMessage id="homepage.question" />
            </Question>
            <div className="flex flex-row items-center">
              <div className="my-3 lg:my-6 relative mr-2">
                <SelectBoxContainer data={data} selected={selected} />
              </div>
              <div>?</div>
            </div>
          </FormBlock>
          {selected && <Answer data={selected} />}
          <RandomizeButton onClick={handleRandomize} disabled={disabled} />
        </InnerContainer>
      </Container>
    </>
  )
}

export default Form
