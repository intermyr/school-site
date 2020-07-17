import React from "react"
import styles from "../styles/sidemenu.module.css"
import { Link } from "gatsby"

const SideMenu = ({data}) => {
  return (
    <div className={styles.column}>
      <ul className={styles.container}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.menu === "sidemenu") {
            return (
              <SideMenuItem
                key={node.id}
                slug={node.fields.slug}
                text={node.frontmatter.title}
              />
            )
          }
        })}
         <SideMenuItem
                key='1'
                slug='/'
                text="test"
              />
      </ul>
    </div>
  )
}

const SideMenuItem = ({ text, arrow, slug }) => {
  const drawArrow = arrow => {
    if (arrow) {
      return <div className={styles.arrow}></div>
    }
  }
  return (
    <li className={styles.sideMenuItem}>
      {drawArrow(arrow)}
      <Link className={styles.textButton} to={slug}>{text}</Link>
    </li>
  )
}

export default SideMenu
