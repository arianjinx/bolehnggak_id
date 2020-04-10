/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Hasil gabut dari <a href="#">Arian</a>,{" "}
          <a href="#">Wahyu</a>, dan <a href="#">Lintang</a>. Terinspirasi dari{" "}
          <a href="#">canigo.sg</a>
        </footer>
      </div>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
