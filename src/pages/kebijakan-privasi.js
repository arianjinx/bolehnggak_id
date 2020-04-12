import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DisclaimerPage = () => (
  <Layout>
    <SEO title="Kebijakan Privasi" />
    <div className="container mx-auto px-6 lg:px-10 py-4 pt-10 text-sm">
      <h1 className="text-base lg:text-4xl mb-4">Kebijakan Privasi</h1>
      <div className=" mb-6" />
      <Link
        to="/"
        className="underline clearfix outline-none focus:outline-none"
      >
        Kembali ke Beranda
      </Link>
    </div>
  </Layout>
)

export default DisclaimerPage
