import React from "react"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import { VideoTag } from "react-video-tag"

import diamond from '../images/index/about/diamond.svg'
import rocket from '../images/index/about/rocket.svg'
import smile from '../images/index/about/smile.svg'
import cross from '../images/common/cross.svg'
import video from '../video/key.mp4'

import Layout from '../components/layout'
import Gallery from "../components/gallery"


const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      index: allFile(filter: {relativeDirectory: {eq: "index"}}) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }

      gallery: allFile(filter: {extension: {regex: "/(jpg)/"}, relativeDirectory: {eq: "index/gallery"}}) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }

      member: allFile(filter: {relativeDirectory: {eq: "index/member"}}) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }

      service: allFile(filter: {relativeDirectory: {eq: "index/service"}}) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }

      about: allFile(filter: {relativeDirectory: {eq: "index/about"}}) {
        edges {
          node {
            base
            publicURL
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="EMOND" description="デザイン通じて別の可能性を作る。わたしたちは、デザインの力で人の感情を思っ切りを突き動かし、新たな価値を創造する。驚きを、喜びを、ワクワクを、企み、アイディアを形にする。もしかしたらクレイジーと言われるかもしれない。でもそんな飛び抜けたアイデアだけが本当に社会を変えていくのだと信じている。" />
      <main>
        <div className="topKeyvisual">
          <div className="videoWrap">
            <VideoTag src={video} autoPlay muted loop playsInline></VideoTag>
          </div>
          <div className="topBgBlack">
            <div className="topKeyvisualContainer">
              <p className="topKeyText">デザイン通じて<br />別の可能性を作る</p>
              <p className="subKeyText">わたしたちは、デザインの力で人の感情を思っ切りを突き動かし、新たな価値を創造する。<br />驚きを、喜びを、ワクワクを、企み、アイディアを形にする。<br />もしかしたらクレイジーと言われるかもしれない。<br className="pc" />でもそんな飛び抜けたアイデアだけが本当に社会を変えていくのだと信じている。</p>
            </div>
          </div>
        </div>
        <section className="top-section gallery-section">
          <div className="container">
            <h2>WORKS</h2>
            <div className="slider-wrapper">
            </div>
            <Gallery />
          </div>
        </section>
        <section className="top-section about-section">
          <div className="container">
            <h3>ABOUT</h3>
            <ul className="about-boxes">
              <li className="item">
                <div className="about-box">
                  <div className="about-box-icon">
                    <img src={diamond} alt="Diamond" />
                  </div>
                  <p className="about-box-ttl">Diamond</p>
                  <p className="about-box-txt">輝かしき<br />魅力があるもの</p>
                </div>
              </li>
              <li className="item cross"><span><img src={cross} alt="" /></span></li>
              <li className="item">
                <div className="about-box">
                  <div className="about-box-icon">
                    <img src={rocket} alt="Beyond" />
                  </div>
                  <p className="about-box-ttl">Beyond</p>
                  <p className="about-box-txt">超える<br />想像を超える</p>
                </div>
              </li>
              <li className="item cross"><span><img src={cross} alt="" /></span></li>
              <li className="item">
                <div className="about-box">
                  <div className="about-box-icon">
                    <img src={smile} alt="Emotion" />
                  </div>
                  <p className="about-box-ttl">Emotion</p>
                  <p className="about-box-txt">ハートを揺さぶる<br />感情が動いた先に</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="top-section service-section">
          <ul className="service-boxes">
            <li className="item"><Link to="/web/" className="unactive-btn"></Link>
              <div className="service-box">
                <div className="service-box-content">
                  <Link to="web" className="button01 blue unactive-btn">Webサービス</Link>
                </div>
              </div>
            </li>
            <li className="item"><a href="https://emondreiwa.stores.jp/" target="_blank" rel="noopener"></a>
              <div className="service-box">
                <div className="service-box-content">
                  <a href="https://emondreiwa.stores.jp/" target="_blank" rel="noopener" className="button01">アパレル事業</a>
                </div>
              </div>
            </li>
            <li className="item"><Link to="/brading/" className="button01 yellow unactive-btn"></Link>
              <div className="service-box">
                <div className="service-box-content">
                  <Link to="/brading/" className="button01 yellow unactive-btn">飲食店ブランディング</Link>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section className="top-section member-section">
          <div className="container">
            <h3>MEMBER</h3>
            <ul className="member-boxes">
              <li className="item mb30-tb">
                <div className="member-box">
                  <div className="member-box-image">
                    <Img
                      fluid={data.member.edges[0].node.childImageSharp.fluid}
                      style={{ maxHeight: '200px' }}
                      alt="長門 弥"
                    />
                  </div>
                  <div className="member-box-name">
                    <p className="sub">代表</p>
                    <p className="name">長門 弥</p>
                  </div>
                </div>
              </li>
              <li className="item mb30-tb">
                <div className="member-box">
                  <div className="member-box-image">
                    <Img
                      fluid={data.member.edges[1].node.childImageSharp.fluid}
                      style={{ maxHeight: '200px' }}
                      alt="奥村 連太郎"
                     />
                  </div>
                  <div className="member-box-name">
                    <p className="sub">Staff</p>
                    <p className="name">Othello</p>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="member-box">
                  <div className="member-box-image">
                    <Img
                      fluid={data.member.edges[2].node.childImageSharp.fluid}
                      style={{ maxHeight: '200px' }}
                      alt="橋本 章広"
                     />
                  </div>
                  <div className="member-box-name">
                    <p className="sub">Staff</p>
                    <p className="name">Magnolia</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* <div className="mb120 mb60-tb">
          <div className="container">
            <div className="topBanner">
              <Img fluid={data.index.edges[0].node.childImageSharp.fluid} alt="バナー" />
            </div>
          </div>
        </div> */}
      </main>
    </Layout>
  )
}

export default IndexPage