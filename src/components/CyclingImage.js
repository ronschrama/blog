import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CyclingImage = () => {
  const data = useStaticQuery(graphql`
    query {
      CyclingPhoto: file(relativePath: { eq: "RonCycling.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.CyclingPhoto.childImageSharp.fluid} alt="Ron riding his bike" />
}

export default CyclingImage;