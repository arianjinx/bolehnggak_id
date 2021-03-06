/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import tw from "twin.macro"
import Footer from "../../containers/Footer/Footer"
import "./Layout.css"

const Layout = ({ children }) => {
  const Wrapper = styled.div`
    ${tw`flex flex-col min-h-screen w-full items-center transition-opacity duration-200 ease-in-out`}
  `

  const Main = styled.div`
    ${tw`flex-grow flex`}
  `

  return (
    <Wrapper>
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
