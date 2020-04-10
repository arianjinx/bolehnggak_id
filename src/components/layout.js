/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "tailwindcss/dist/base.css"
import "tailwindcss/dist/components.css"
import "tailwindcss/dist/utilities.css"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <main>{children}</main>
      <footer>
        <div className="container mx-auto px-4 mt-10 text-sm my-2">
          <div className="text-base sm:text-lg mb-4">
            Ada sesuatu yang kurang nggak? <a href="#" className="underline">bantu nambahin konten disini</a>
          </div>
          <Link to="/disclaimer/" className="text-gray-500 uppercase">Disclaimer</Link>
          <div className="text-gray-500">
            © {new Date().getFullYear()}, Hasil gabut dari <a href="#" className="underline">Arian</a>
            , <a href="#" className="underline">Wahyu</a>, dan <a href="#" className="underline">Lintang</a>. Terinspirasi
            dari <a href="#" className="underline">canigo.sg</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
