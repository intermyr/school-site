import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layoutIndex"
import SEO from "../components/seo"

import styles from "../styles/index.module.css"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Новости" />
      {data.allMarkdownRemark.edges.map(({ node }) => {
        if (node.frontmatter.menu === "news") {
          return (
            <div key={node.id}>
              <Link to={node.fields.slug} className={styles.link}>
                <h3>
                  {node.frontmatter.title + " "}
                  <span className={styles.date}>— {node.frontmatter.date}</span>
                </h3>
                <p className={styles.description}>
                  {node.frontmatter.description}
                </p>
              </Link>
            </div>
          )
        }
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY", locale: "ru")
            description
            menu
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
