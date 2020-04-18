import React, { Component } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import SEO from "../components/seo"
import Project06 from "../components/relatedProject06"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import icon_instagram from '../images/common/icon_instagram.png'

import Work from "../components/work"
import workStyles from "../components/work.module.scss"

class WorkPage06 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav1: null,
      nav2: null,
    }
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    })
  }

  render() {
    const settings = {
      dots: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      arrows: false,
      fade: true,
    }

    const settings02 = {
      slidesToScroll: 1,
      slidesToShow: 1,
      draggable: false,
      fade: true,
    }
    return (
      <Work>
        <SEO title="居酒屋しんみどう店" />
        <main>
          <StaticQuery
            query={graphql`
              query Work06 {
                allFile(
                  filter: { relativeDirectory: { eq: "work/work06" } }
                  sort: { fields: base }
                ) {
                  edges {
                    node {
                      base
                      id
                      childImageSharp {
                        fluid {
                          aspectRatio
                          base64
                          sizes
                          src
                          srcSet
                        }
                      }
                    }
                  }
                }
              }
            `}
            render={data => (
              <div className={workStyles.workSliderWrapper}>
                <Slider
                  className={workStyles.workCoverSlider}
                  {...settings02}
                  asNavFor={this.state.nav2}
                  ref={slider => (this.slider1 = slider)}
                >
                  {data.allFile.edges.map(({ node }) => (
                    <div className={workStyles.workCoverSlide} key={node.id}>
                      <div>
                        <Img
                          fluid={node.childImageSharp.fluid}
                          alt={node.base.split(".")[0]}
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
                <div className={workStyles.workMainSlider}>
                  <div className="work-slider">
                    <Slider
                      className={workStyles.workSlider}
                      {...settings}
                      asNavFor={this.state.nav1}
                      ref={slider => (this.slider2 = slider)}
                    >
                      {data.allFile.edges.map(({ node }) => (
                        <div className={workStyles.workSlide} key={node.id}>
                          <div>
                            <Img
                              fluid={node.childImageSharp.fluid}
                              alt={node.base.split(".")[0]}
                            />
                          </div>
                        </div>
                      ))}
                    </Slider>
                    <div className={workStyles.workSliderInfo}>
                      <a
                        href="https://www.google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={workStyles.webButton}
                      >
                        WEB SITE
                      </a>
                      <div className={workStyles.workSliderSquare}>
                        <a
                          href="https://www.instagram.com/emond.onsen/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={icon_instagram}
                            width="20"
                            alt="instagram"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          />
          <section>
            <div className={workStyles.innerWrapper}>
              <h2>BRANDING</h2>
              <p className={workStyles.workTitle}>居酒屋しんみどう店</p>
              <p className={workStyles.workContent}>
                メニュ制作ー改善。
                <br />
                もともと、メニューがなくママさんのオリジナリ理から基本メニューを作成。
                <br />
                A4にまとめました。
                <br />
                制作期間約1週間
                <br />
                <br />
                Signs, menus, exterior signs, posters, leaflets
                <br />
                We have unified the design by being involved since the opening,
                and have continued to improve the menu based on customer data.
                <br />
                Production period about 1 month
              </p>
            </div>
          </section>
          <Project06 />
        </main>
      </Work>
    )
  }
}

export default WorkPage06