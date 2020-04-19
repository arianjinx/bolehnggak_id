import React from "react"
import { FormattedMessage, useIntl } from "react-intl"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DisclaimerPage = () => {
  const { formatMessage: f } = useIntl()
  return (
    <Layout>
      <SEO title={f({ id: "disclaimer.title" })} />
      <div className="container mx-auto px-6 lg:px-10 py-4 pt-10 text-sm">
        <h1 className="text-base lg:text-4xl mb-4">
          <FormattedMessage id="disclaimer.title" />
        </h1>
        <div>
          <ul className="list-disc mb-6 pl-4">
            <li>
              You are relying on the information provided at your own risk.
            </li>
            <li>
              You should consult official sources before you act on this
              information.
            </li>
            <li>
              The authors of this site are not professionals and are not giving
              professional advice.
            </li>
            <li>
              The content posted may be invalid over time, or inaccurate due to
              human error.
            </li>
            <li>
              The authors of this site do not represent any organisation, nor
              are we doing this on behalf of any organisation.
            </li>
            <li>
              Any information posted is to the best of our knowledge and not
              intended to defame.
            </li>
            <li>
              We are not responsible for comments posted by other readers.
            </li>
            <li>
              We are trying to help. Please don’t lawyer up if we made a mistake
              or were ill-informed. Feedback is always appreciated.
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="underline clearfix outline-none focus:outline-none"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </Layout>
  )
}

export default DisclaimerPage
