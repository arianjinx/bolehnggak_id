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
import ogImage from "../images/bolehnggak_id-og.png"

function SEO({ description, lang, meta, title, isHomePage }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
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

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={
        isHomePage ? site.siteMetadata.title : `${site.siteMetadata.title} | %s`
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.canonical,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          itemprop: `image`,
          content: site.siteMetadata.url + ogImage,
        },
        {
          property: `og:image:secure_url`,
          content: site.siteMetadata.url + ogImage,
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
          content: site.siteMetadata.url,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: site.siteMetadata.url + ogImage,
        },
      ].concat(meta)}
    />
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
