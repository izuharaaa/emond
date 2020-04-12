import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {

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
    <footer className={footerStyles.footer}>
      <section className="top-section contact-section">
        <div className="container">
          <h3>CONTACT US</h3>
          <form>
            <div className="field-wrapper">
              <div className="mb20-tb">
                <div className="form-control">
                  <div className="form-field-name">お名前</div>
                  <input type="text" className="form-text-field" />
                </div>
              </div>
              <div>
                <div className="form-control">
                  <div className="form-field-name">メールアドレス</div>
                  <input type="email" className="form-text-field" />
                </div>
              </div>
            </div>
            <div className="mb50 mb20-tb">
              <div className="form-control">
                <div className="form-field-name">お問い合わせ内容</div>
                <textarea className="form-textarea"></textarea>
              </div>
            </div>
            <div className="center-text">
              <button type="submit" className="button02">入力内容を確認する</button>
            </div>
          </form>
        </div>
      </section>
      <div className={footerStyles.footerWrapper}>
        {/* <nav className={footerStyles.footerNav}>
          <ul className={footerStyles.footerNavList}>
            <li className={footerStyles.item}>
              <div className={footerStyles.footerNavItem}> 
                <a href="#about" className={footerStyles.footerLink}>ABOUT</a>
              </div>
            </li>
            <li className={footerStyles.item}>
              <div className={footerStyles.footerNavItem}> 
                <a href="#service" className={footerStyles.footerLink}>SERVICE</a>
              </div>
            </li>
            <li className={footerStyles.item}>
              <div className={footerStyles.footerNavItem}> 
                <a href="#gallery" className={footerStyles.footerLink}>GALLERY</a>
              </div>
            </li>
            <li className={footerStyles.item}>
              <div className={footerStyles.footerNavItem}> 
                <a href="#member" className={footerStyles.footerLink}>MEMBER</a>
              </div>
            </li>
            <li className={footerStyles.item}>
              <div className={footerStyles.footerNavItem}> 
                <a href="#contact" className={footerStyles.footerLink}>CONTACT US</a>
              </div>
            </li>
          </ul>
        </nav> */}
        <p className={footerStyles.footerCopyright}>Copyright © 2020 {data.site.siteMetadata.title}. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer