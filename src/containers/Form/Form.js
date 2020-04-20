import React, { useContext } from "react"
import "../../components/SelectBox/SelectBox.css"
import styled from "@emotion/styled"
import tw from "twin.macro"
import { Helmet } from "react-helmet"
import RandomizeButton from "../RandomizeButton/RandomizeButton"
import SelectBoxContainer from "../SelectBoxContainer/SelectBoxContainer"
import { FormattedMessage } from "gatsby-plugin-intl"
import Answer from "../Answer/Answer"
import { ActivityContext } from "../../context/ActivityContext"

const Form = () => {
  const { data, selected, setSelected } = useContext(ActivityContext)

  const bgStatusToggler = () => {
    if (!selected) {
      return "bg-white"
    }
    return selected.answertype
  }

  const handleRandomize = () => {
    const randomId = Math.floor(Math.random() * (data.length - 0))
    setSelected(data[randomId])
  }

  const Container = styled.div`
    ${tw`flex flex-row items-center flex-wrap text-base justify-center items-center w-full text-center`}
  `

  const InnerContainer = styled.div`
    ${tw`flex flex-col flex-wrap items-center justify-center w-full px-4`}
  `

  const FormBlock = styled.div`
    ${tw`flex flex-wrap items-center justify-center w-full mb-3`}
  `

  const Question = styled.div`
    ${tw`leading-tight mr-2`}
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
              <div className="my-3 relative mr-2">
                <SelectBoxContainer data={data} />
              </div>
              <div>?</div>
            </div>
          </FormBlock>
          {selected && <Answer data={selected} />}
          <RandomizeButton onClick={handleRandomize} />
        </InnerContainer>
      </Container>
    </>
  )
}

export default Form
