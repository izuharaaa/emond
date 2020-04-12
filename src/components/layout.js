import React from "react"

import Header from '../components/header'
import Footer from '../components/footer'

import '../styles/sass/import.scss'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
  return (
    <div className={layoutStyles.layoutWrapper}>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout