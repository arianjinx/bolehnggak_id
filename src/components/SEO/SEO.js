/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import ogImage from "../../images/bolehnggak_id-og.jpg"

function SEO({ description, lang, meta, title, isHomePage, canonical }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            secureUrl
            canonical
            fbAppId
            ogImageWidth
            ogImageHeight
            twitterSite
            twitterCreator
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = isHomePage ? site.siteMetadata.title : title
  const metaCanonical = isHomePage ? site.siteMetadata.canonical : canonical

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: metaCanonical,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          itemprop: `image`,
          content: site.siteMetadata.siteUrl + ogImage,
        },
        {
          property: `og:image:secure_url`,
          content: site.siteMetadata.secureUrl + ogImage,
        },
        {
          property: `og:image:width`,
          content: site.siteMetadata.ogImageWidth,
        },
        {
          property: `og:image:height`,
          content: site.siteMetadata.ogImageHeight,
        },
        {
          property: `fb:app_id`,
          content: site.siteMetadata.fbAppId,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.twitterSite,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitterCreator,
        },
        {
          name: `twitter:url`,
          content: metaCanonical,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: site.siteMetadata.siteUrl + ogImage,
        },
      ].concat(meta)}
    >
      <link rel="canonical" href={metaCanonical} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `id`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
