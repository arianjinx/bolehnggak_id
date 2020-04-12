/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-10 lg:pt-24">{children}</main>
      <Footer />
    </div>
  )
}

console.log(
  "%c corona ndang minggato please ",
  "background: #fed7d7; color: #000; font-size: 32px;"
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
