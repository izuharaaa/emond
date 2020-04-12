import React,{Component} from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "gatsby"
import SEO from "../components/seo"

import Work from '../components/work'
import workStyles from '../components/work.module.scss'

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }
  render() {
    const settings = {
      dots: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      arrows: false,
      fade: true
    };
  
    const settings02 = {
      slidesToScroll: 1,
      slidesToShow: 1,
      draggable: false,
      fade: true
    };
    return (
      <Work>
      <SEO title="居酒屋ハッシュタグ梅田本店" />
      <main>
        <div className={workStyles.workSliderWrapper}>
        <Slider 
          className={workStyles.workCoverSlider} 
          {...settings02}
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div className={workStyles.workCoverSlide}>
            <div>
              <img src={`../../images/work/work01/slide01.jpg`} alt="" />
            </div>
          </div>
          <div className={workStyles.workCoverSlide}>
            <div>
              <img src={`../../images/work/work01/slide02.jpg`} alt="" />
            </div>
          </div>
          <div className={workStyles.workCoverSlide}>
            <div>
              <img src={`../../images/work/work01/slide03.jpg`} alt="" />
            </div>
          </div>
          <div className={workStyles.workCoverSlide}>
            <div>
              <img src={`../../images/work/work01/slide04.jpg`} alt="" />
            </div>
          </div>
          <div className={workStyles.workCoverSlide}>
            <div>
              <img src={`../../images/work/work01/slide05.jpg`} alt="" />
            </div>
          </div>
          <div className={workStyles.workCoverSlide}>
            <div>
              <img src={`../../images/work/work01/slide06.jpg`} alt="" />
            </div>
          </div>
          <div className={workStyles.workCoverSlide}>
            <div>
              <img src={`../../images/work/work01/slide07.jpg`} alt="" />
            </div>
          </div>
          <div className={workStyles.workCoverSlide}>
            <div>
              <img src={`../../images/work/work01/slide08.jpg`} alt="" />
            </div>
          </div>
          <div className={workStyles.workCoverSlide}>
            <div>
              <img src={`../../images/work/work01/slide09.jpg`} alt="" />
            </div>
          </div>
          <div className={workStyles.workCoverSlide}>
            <div>
              <img src={`../../images/work/work01/slide10.jpg`} alt="" />
            </div>
          </div>
        </Slider>
          <div className={workStyles.workMainSlider}>
            <div className="work-slider">
              <Slider 
                className={workStyles.workSlider} 
                {...settings} 
                asNavFor={this.state.nav1}
                ref={slider => (this.slider2 = slider)}
              >
                <div className={workStyles.workSlide}>
                  <div>
                    <img src={`../../images/work/work01/slide01.jpg`} alt="" />
                  </div>
                </div>
                <div className={workStyles.workSlide}>
                  <div>
                    <img src={`../../images/work/work01/slide02.jpg`} alt="" />
                  </div>
                </div>
                <div className={workStyles.workSlide}>
                  <div>
                    <img src={`../../images/work/work01/slide03.jpg`} alt="" />
                  </div>
                </div>
                <div className={workStyles.workSlide}>
                  <div>
                    <img src={`../../images/work/work01/slide04.jpg`} alt="" />
                  </div>
                </div>
                <div className={workStyles.workSlide}>
                  <div>
                    <img src={`../../images/work/work01/slide05.jpg`} alt="" />
                  </div>
                </div>
                <div className={workStyles.workSlide}>
                  <div>
                    <img src={`../../images/work/work01/slide06.jpg`} alt="" />
                  </div>
                </div>
                <div className={workStyles.workSlide}>
                  <div>
                    <img src={`../../images/work/work01/slide07.jpg`} alt="" />
                  </div>
                </div>
                <div className={workStyles.workSlide}>
                  <div>
                    <img src={`../../images/work/work01/slide08.jpg`} alt="" />
                  </div>
                </div>
                <div className={workStyles.workSlide}>
                  <div>
                    <img src={`../../images/work/work01/slide09.jpg`} alt="" />
                  </div>
                </div>
                <div className={workStyles.workSlide}>
                  <div>
                    <img src={`../../images/work/work01/slide10.jpg`} alt="" />
                  </div>
                </div>
              </Slider>
              <div className={workStyles.workSliderInfo}>
                <a href="https://www.google.com/" rel="noopener noreferrer"  className={workStyles.webButton}>WEB SITE</a>
                <div className={workStyles.workSliderSquare}><a href="https://www.instagram.com/emond.onsen/" target="_blank" rel="noopener noreferrer"><img src={`../../images/icon_instagram.png`} width="20" alt="instagram" /></a></div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className={workStyles.innerWrapper}>
            <h2>BRANDING</h2>
            <p className={workStyles.workTitle}>居酒屋ハッシュタグ梅田本店</p>
            <p className={workStyles.workContent}>看板・メニュー・外観置き看板・ポスター・ビラ制作<br />オープンから関わることによりデザインの統一化をし、その後もお客様のデータを元にメニュー改善。<br />制作期間約1ヶ月<br /><br />Signs, menus, exterior signs, posters, leaflets<br />We have unified the design by being involved since the opening, and have continued to improve the menu based on customer data.<br />Production period about 1 month</p>
          </div>
        </section>
        <section>
          <div>
            <h2 className="center-text">RELATED PROJECT</h2>
            <ul className={workStyles.relatedProjects}>
              <li>
                <div className={workStyles.relatedProjectItem}>
                  <Link to="/work01/">
                    <img src={`../../images/project/project_thumb01.jpg`} alt="" />
                  </Link>
                </div>
              </li>
              <li>
                <div className={workStyles.relatedProjectItem}>
                  <Link to="/work02/">
                    <img src={`../../images/project/project_thumb02.jpg`} alt="" />
                  </Link>
                </div>
              </li>
              <li>
                <div className={workStyles.relatedProjectItem}>
                  <Link to="/work03/">
                    <img src={`../../images/project/project_thumb03.jpg`} alt="" />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
      </Work>
    )
  }
}

export default IndexPage