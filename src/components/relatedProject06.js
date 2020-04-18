import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import workStyles from '../components/work.module.scss'
import { Link } from "gatsby"

const Project06 = () => {
  const data = useStaticQuery(graphql`
    query relatedProject06 {
      allFile(filter: {relativeDirectory: {eq: "work/work06/project"}}, sort: {fields: id, order: ASC}) {
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
    <section>
      <div>
        <h2 className="center-text">RELATED PROJECT</h2>
        <ul className={workStyles.relatedProjects}>
          {data.allFile.edges.map(({ node }) => (
            <li key={node.id}>
              <div className={workStyles.relatedProjectItem}>
                <Link to={'/'+node.base.split(".")[0]+'/'} className="block">
                  <Img fluid={node.childImageSharp.fluid} alt={node.base.split(".")[0]} />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
   )
}

export default Project06