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
      <section className="contact-section">
        <div className="container">
          <h3>CONTACT US</h3>
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="field-wrapper">
              <div className="mb20-tb">
                <div className="form-control">
                  <div className="form-field-name">お名前</div>
                  <input type="text" required name="name" className="form-text-field" />
                </div>
              </div>
              <div>
                <div className="form-control">
                  <div className="form-field-name">メールアドレス</div>
                  <input type="email" required name="email" className="form-text-field" />
                </div>
              </div>
            </div>
            <div className="mb50 mb20-tb">
              <div className="form-control">
                <div className="form-field-name">お問い合わせ内容</div>
                <textarea required name="message" className="form-textarea"></textarea>
              </div>
            </div>
            <div className="center-text">
              <button type="submit" className="button02">送信する</button>
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