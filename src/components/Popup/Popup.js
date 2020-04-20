import React, { useContext } from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"
import { FormattedMessage } from "gatsby-plugin-intl"
import { ActivityContext } from "../../context/ActivityContext"

const Popup = props => {
  const { setIsShowOnboarding } = useContext(ActivityContext)

  const Wrapper = styled.div`
    ${tw`flex flex-col justify-center w-full py-10 px-6`}
  `

  const Box = styled.div`
    ${tw`mx-auto relative bg-white max-w-2xl`}
    box-shadow: 8px 8px 0px 0px rgba(35, 40, 49, 1);
    border: 2px solid #000000;
  `

  const BoxHeading = styled.div`
    ${tw`text-sm text-white px-4 py-2 box-border`}
    background-color: #5084e9;
    border-bottom: 2px solid #000000;

    &::before {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      border: 2px solid #000000;
      background-color: #bed4ff;
      right: 32px;
    }
  `

  const CloseButton = styled.button`
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid #000000;
    background-color: #bed4ff;
    right: 32px;
    background-color: #ff8989;
    right: 8px;
  `

  const Content = styled.p`
    ${tw`text-base text-center p-10 pb-6`}

    strong {
      ${tw`font-bold`}
    }
  `

  const Button = styled.button`
    ${tw`text-sm bg-white uppercase p-3 box-border mx-auto mb-10 block`}
    box-shadow: 4px 4px 0px 0px rgba(35, 40, 49, 1);
    background: #94ff9e;
    border: 2px solid #232831;

    &::before {
      content: "> ";
    }

    &::after {
      content: " <";
    }
  `

  const handleClick = e => {
    e.preventDefault()
    setIsShowOnboarding(false)
  }

  const handleClose = e => {
    e.preventDefault()
    setIsShowOnboarding(false)
  }

  return (
    <Wrapper className={props.className}>
      <Box>
        <BoxHeading>
          <FormattedMessage id="homepage.menu_bar" />
          <CloseButton onClick={handleClose} />
        </BoxHeading>
        <Content>
          <FormattedMessage
            id="homepage.intro"
            values={{
              bold: (...chunks) => <strong>{chunks}</strong>,
            }}
          />
        </Content>
        <Button onClick={handleClick}>
          <FormattedMessage id="homepage.cta_start" />
        </Button>
      </Box>
    </Wrapper>
  )
}

export default Popup
