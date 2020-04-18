import React from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import diamond from '../images/index/about/diamond.svg'
import rocket from '../images/index/about/rocket.svg'
import smile from '../images/index/about/smile.svg'

import Layout from '../components/layout'

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button className="slick-custom-arr right-arr" onClick={onClick}><img src={`../../images/arr_right.svg`} alt=""/></button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="slick-custom-arr left-arr" onClick={onClick}><img src={`../../images/arr_left.svg`} alt=""/></button>
  );
}

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

  console.log(data);

  const settings = {
    dots: true,
    variableWidth: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: false,
    centerMode: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Layout>
      <SEO title="TOP PAGE" />
      <main>
        <div className="parallaxText">
          <Img fluid={data.index.edges[14].node.childImageSharp.fluid} alt="parallax" />
        </div>
        <div className="topKeyvisual">
          <div className="topKeyvisualContainer">
            <div className="topKeyText">デザイン通じて<br />別の可能性を作る</div>
          </div>
          <div className="topKeyImage">
            <Img fluid={data.index.edges[20].node.childImageSharp.fluid} alt="デザイン通じて別の可能性を作る" />
          </div>
        </div>
        <section className="top-section top-service-section">
          <div className="container">
            <h2>SERVICE</h2>
            <ul className="main-service-boxes">
              <li className="item">
                <div className="main-service-box web-box">
                  <div className="main-service-box-image"><img src={`../../images/img_main_service02.png`} alt="" style={{ maxWidth: `374px` }} /></div>
                  <Link to="/web/" className="button01">Webサービス</Link>
                </div>
              </li>
              <li className="item">
                <div className="main-service-box apparel-box">
                  <div className="main-service-box-image"><img src={`../../images/img_main_service01.png`} alt="" style={{ maxWidth: `368px` }} className="pc" /><img src={`../../images/img_main_service01_sp.png`} alt="" className="tb" /></div>
                  <Link to="/apparel/" className="button01">アパレル事業</Link>
                </div>
              </li>
              <li className="item">
                <div className="main-service-box branding-box">
                  <div className="main-service-box-image"><img src={`../../images/img_main_service03.png`} alt="" style={{ maxWidth: `339px` }} /></div>
                  <Link to="/branding/" className="button01">飲食店ブランディング</Link>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="top-section gallery-section">
          <div className="container">
            <h2>GALLERY</h2>
            <div className="slider-wrapper">
            </div>
            <Slider className="gallery-slider" {...settings}>
              <div className="gallery-image">
                <div>
                  <Link to="/work01/" className="block">
                    <Img fluid={data.gallery.edges[0].node.childImageSharp.fluid} alth="parallax" />
                  </Link>
                </div>
              </div>
              <div className="gallery-image">
                <div>
                  <Link to="/work01/" className="block">
                    <Img fluid={data.gallery.edges[1].node.childImageSharp.fluid} alth="parallax" />
                  </Link>
                </div>
              </div>
              <div className="gallery-image">
                <div>
                  <Link to="/work01/" className="block">
                    <Img fluid={data.gallery.edges[2].node.childImageSharp.fluid} alth="parallax" />
                  </Link>
                </div>
              </div>
              <div className="gallery-image">
                <div>
                  <Link to="/work01/" className="block">
                    <Img fluid={data.gallery.edges[3].node.childImageSharp.fluid} alth="parallax" />
                  </Link>
                </div>
              </div>
            </Slider>
          </div>
        </section>
        <section className="top-section about-section">
          <div className="container">
            <h3>ABOUT</h3>
            <ul className="about-boxes mb80 mb40-tb">
              <li className="item">
                <div className="about-box">
                  <div className="about-box-icon">
                    <img src={diamond} alt="Diamond" />
                  </div>
                  <p className="about-box-ttl">Diamond</p>
                  <p className="about-box-txt">輝かしき、魅力があるもの</p>
                </div>
              </li>
              <li className="item cross"><span><img src={`../../images/cross.svg`} alt="" /></span></li>
              <li className="item">
                <div className="about-box">
                  <div className="about-box-icon">
                    <img src={rocket} alt="Beyond" />
                  </div>
                  <p className="about-box-ttl">Beyond</p>
                  <p className="about-box-txt">超える、想像を超える</p>
                </div>
              </li>
              <li className="item cross"><span><img src={`../../images/cross.svg`} alt="" /></span></li>
              <li className="item">
                <div className="about-box">
                  <div className="about-box-icon">
                    <img src={smile} alt="Emotion" />
                  </div>
                  <p className="about-box-ttl">Emotion</p>
                  <p className="about-box-txt">ハートを揺さぶる、感情が動いた先に</p>
                </div>
              </li>
            </ul>
            <p className="about-txt">わたしたちは、デザインの力で人の感情を思っ切りを突き動かし、新たな価値を創造する<br />驚きを、喜びを、ワクワクを、企み、アイディアを形にする。<br />もしかしたらクレイジーと言われるかもしれない。<br />でもそんな飛び抜けたアイデアだけが本当に社会を変えていくのだと信じている。</p>
          </div>
        </section>
        <section className="top-section service-section">
          <div className="container">
            <h3>SERVICE</h3>
            <ul className="service-boxes">
              <li className="item">
                <div className="service-box">
                  <div className="service-box-image">
                    <img src={`../../images/img_service01.png`} alt="" style={{ maxWidth: `360px` }}/>
                  </div>
                  <div className="service-box-content">
                    <Link to="/web/" className="button01">Webサービス</Link>
                    <p className="service-box-txt">ホームページ作成</p>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="service-box">
                  <div className="service-box-image">
                    <img src={`../../images/img_service02.png`} alt="" style={{ maxWidth: `320px` }}/>
                  </div>
                  <div className="service-box-content">
                    <Link to="/apparel/" className="button01">アパレル事業</Link>
                    <p className="service-box-txt">架空の温泉を作りアパレルデザイン、販売、ブランディング、マーケティング、イベントなど主に事業としています。</p>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="service-box">
                  <div className="service-box-image">
                    <img src={`../../images/img_service03.png`} alt="" style={{ maxWidth: `327px` }}/>
                  </div>
                  <div className="service-box-content">
                    <Link to="/brading/" className="button01">飲食店<br className="tb"/>ブランディング</Link>
                    <p className="service-box-txt">新規立ち上げによるメニュー作成や看板作成など主にデザインがメインによるブランディング。</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="top-section member-section">
          <div className="container">
            <h3>MEMBER</h3>
            <ul className="member-boxes">
              <li className="item mb30-tb">
                <div className="member-box">
                  <div className="member-box-image">
                    <div className="img-cover"><img src={`../../images/member01.png`} alt="" /></div>
                  </div>
                  <div className="member-box-name">山田 太郎</div>
                </div>
              </li>
              <li className="item mb30-tb">
                <div className="member-box">
                  <div className="member-box-image">
                    <div className="img-cover"><img src={`../../images/member02.png`} alt="" /></div>
                  </div>
                  <div className="member-box-name">山田 太郎</div>
                </div>
              </li>
              <li className="item">
                <div className="member-box">
                  <div className="member-box-image">
                    <div className="img-cover"><img src={`../../images/member03.png`} alt="" /></div>
                  </div>
                  <div className="member-box-name">山田 太郎</div>
                </div>
              </li>
              <li className="item">
                <div className="member-box">
                  <div className="member-box-image">
                    <div className="img-cover"><img src={`../../images/member04.png`} alt="" /></div>
                  </div>
                  <div className="member-box-name">山田 太郎</div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <div className="mb120 mb60-tb">
          <div className="container">
            <div className="topBanner"><img src={`../../images/bnr01.png`} alt="" /></div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage