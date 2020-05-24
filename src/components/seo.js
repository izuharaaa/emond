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

const SEO = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author {
              name
              summary
            }
            siteUrl
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
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: "EMOND" },
        { name: "twitter:description", content: metaDescription },
        { name: "twitter:image", content: "/images/common/ogp.png" },

        { property: "keywords", content: "emond,笑門道,デザイナー,デザイン,webサービス,アパレル,飲食店,ブランディング,飲食店ブランディング",},
        { name: "description", content: metaDescription,},
        { property: "author", content: "長門 弥",},
        { property: "format-detection", content: "telephone=no",},
        { property: "canonical", content: site.siteMetadata.siteUrl,},
        { property: "og:locale", content: "ja_JP",},
        { property: "og:url", content: site.siteMetadata.siteUrl,},
        { property: "og:title", content: title,},
        { property: "og:description", content: metaDescription,},
        { property: "og:image", content: "/images/common/ogp.png",},
        { property: "og:type", content: "website",},
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `jp`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  // image: null,
}

export default SEO
