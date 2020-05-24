import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

import headerStyles from "./header.module.scss"
import logo from "../images/common/logo.svg"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerWrapper}>
        <h1 className={headerStyles.logo}>
          <Link to="/">
            <img src={logo} alt={data.site.siteMetadata.title} />
          </Link>
        </h1>
      </div>
    </header>
  )
}

export default Header