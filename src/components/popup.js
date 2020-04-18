import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"
import { FormattedMessage } from "react-intl"

const Wrapper = styled.div`
  ${tw`fixed w-full h-full top-0 left-0 p-6`}
`

const Box = styled.div`
  ${tw`mx-auto relative bg-white max-w-2xl`}
  box-shadow: 8px 8px 0px 0px rgba(35, 40, 49, 1);
  border: 2px solid #000000;
  top: 45%;
  transform: translateY(-50%);
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

const Intro = styled.p`
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

const Popup = (props) => {
  return (
    <Wrapper className={props.className}>
      <Box>
        <BoxHeading>
          <FormattedMessage id="homepage.menu_bar" />
          <CloseButton />
        </BoxHeading>
        <Intro>
          <FormattedMessage
            id="homepage.intro"
            values={{
              bold: (...chunks) => <strong>{chunks}</strong>,
            }}
          />
        </Intro>
        <Button>
          <FormattedMessage id="homepage.cta_start" />
        </Button>
      </Box>
    </Wrapper>
  )
}

export default Popup
