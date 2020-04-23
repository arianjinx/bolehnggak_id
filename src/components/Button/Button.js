import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"

const Button = ({ onClick, bgColor = "#ffc42e", children, disabled }) => {
  const Button = styled.button`
    ${tw`text-sm lg:text-base select-none mb-4 mx-auto px-2 py-2 box-border block mb-10 focus:outline-none flex items-center`}
    box-shadow: 4px 4px 0px 0px rgba(35, 40, 49, 1);
    background-color: ${bgColor};
    border: 2px solid #000000;
    min-height: 48px;
    pointer-events: ${disabled ? "none" : "initial"};
  `

  const handleClick = () => {
    onClick && onClick()
  }

  return <Button onClick={handleClick}>{children}</Button>
}

export default Button
