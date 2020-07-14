import React from "react"
import { graphql, Link } from "gatsby"
import Layout from './../components/layout';


const newsTemplate = ({ data}) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
        <h1>{frontmatter.title}</h1>
        <h2>
          {frontmatter.date}
        </h2>
          <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
    }
  }
}
`

export default newsTemplate
