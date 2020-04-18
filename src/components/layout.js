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
import Footer from "./footer"
import "./layout.css"

const Wrapper = styled.div`
  ${tw`flex flex-col min-h-screen`}
`

const Main = styled.div`
  ${tw`flex-grow pt-10 lg:pt-24`}
`

const Layout = ({ children }) => {
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
