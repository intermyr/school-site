import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import SideMenu from './sidemenu';

import styles from "../styles/layout-index.module.css"
import "../styles/global.css"

const Layout = ({ children }) => {

  const data = useStaticQuery(
    graphql`
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
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} data={data}/>
      <main className={styles.container}>
        <div className={styles.contentColumn}>{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
