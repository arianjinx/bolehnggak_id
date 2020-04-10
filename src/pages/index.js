import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Beranda" isHomePage />
    <p>
      Yuk cari tau hal yang boleh atau nggak boleh dilakuin selama masa
      Pembatasan Sosial Berskala Besar (PSBB).
    </p>
    <h1>Boleh Enggak</h1>
    <h2>Boleh</h2>
    <p>Boleh banget tuh.. Nonton Itaewon Class jangan lupa!</p>
    <Link to="/disclaimer/">Disclaimer</Link>
  </Layout>
);

export default IndexPage
