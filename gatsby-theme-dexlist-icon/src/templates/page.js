import React from "react"
import { graphql } from "gatsby"
import List from "../components/List"

function PageTemplate({ data }) {
  return (
    <List data={data} />
  )
}

export default PageTemplate

export const query = graphql`
  query($id: String!) {
    page: dataYaml(id: { eq: $id }) {
      id
      items {
        name
        link
        logo {
          childImageSharp {
            fluid(maxWidth: 128 maxHeight: 128) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`