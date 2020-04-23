import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"
import Button from "../../components/Button/Button"

const Popup = ({
  heading,
  className,
  content,
  cta,
  ctaColor = "#FFD494",
  onHandleClose,
  onHandleClick,
}) => {
  const Wrapper = styled.div`
    ${tw`flex flex-col justify-center w-full py-10 px-6`}
  `

  const Box = styled.div`
    ${tw`mx-auto relative bg-white max-w-xs lg:max-w-2xl`}
    width: 100%;
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

  const Content = styled.div`
    ${tw`text-base p-6`}

    strong {
      ${tw`font-bold`}
    }
  `

  const handleClick = () => {
    onHandleClick && onHandleClick()
  }

  const handleClose = () => {
    onHandleClose && onHandleClose()
  }

  return (
    <Wrapper className={className}>
      <Box>
        <BoxHeading>
          {heading}
          <CloseButton onClick={handleClose} />
        </BoxHeading>
        <Content>{content}</Content>
        <Button onClick={handleClick} bgColor={ctaColor}>
          {cta}
        </Button>
      </Box>
    </Wrapper>
  )
}

export default Popup
