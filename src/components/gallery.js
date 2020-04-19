import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import arr_right from '../images/common/arr_right.png'
import arr_left from '../images/common/arr_left.png'

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button className="slick-custom-arr right-arr" onClick={onClick}><img src={arr_right} alt=""/></button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="slick-custom-arr left-arr" onClick={onClick}><img src={arr_left} alt=""/></button>
  );
}

const Gallery = () => {

  const settings = {
    dots: true,
    variableWidth: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    centerMode: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const data = useStaticQuery(graphql`
    query GalleryQuery {
      allFile(filter: {relativeDirectory: {eq: "index/gallery"}}, sort: {order: ASC, fields: base}) {
        edges {
          node {
            base
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

   return (
    <Slider className="gallery-slider" {...settings}>
    {data.allFile.edges.map(({ node }) => (
      <div className="gallery-image" key={node.id}>
        <div>
          <Link to={'/'+node.base.split(".")[0]+'/'} className="block">
            <Img fluid={node.childImageSharp.fluid} alt={node.base.split(".")[0]} />
          </Link>
        </div>
      </div>
    ))}
    </Slider>
   )
}

export default Gallery