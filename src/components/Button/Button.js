import React, { useContext, useEffect } from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"
import { ActivitySetter, ActivityState } from "../../context/ActivityContext"

const Button = ({ onClick, bgColor = "#ffc42e", children, disabled }) => {
  const { isLoading } = useContext(ActivityState)
  const { setIsLoading } = useContext(ActivitySetter)

  useEffect(() => {
    setIsLoading(false)
  }, [setIsLoading])

  const Button = styled.button`
    ${tw`text-sm lg:text-base select-none mb-4 mx-auto px-2 py-2 box-border block mb-10 focus:outline-none flex items-center`}
    box-shadow: ${
      isLoading
        ? "0 0 0 0 rgba(35, 40, 49, 1)"
        : "4px 4px 0 0 rgba(35, 40, 49, 1)"
    };
    background-color: ${isLoading ? "#ccc" : bgColor};
    border: 2px solid #000000;
    min-height: 48px;
    pointer-events: ${disabled ? "none" : "initial"};
    transition: background-color 0.25s ease;
  `

  const handleClick = () => {
    onClick && onClick()
  }

  return <Button onClick={handleClick}>{children}</Button>
}

export default Button
