import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import SideMenu from "./sidemenu"
import Footer from "./footer"
import styles from "../styles/layout.module.css"
import "../styles/global.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className={styles.container}>
        <SideMenu />
        <div>{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
