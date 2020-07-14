import React, { useState } from "react"
import { useMediaPredicate } from "react-media-hook"
import Navbar from "./navbar"
import BurgerNav from "./burgerNav"

import InstagramIcon from "../icons/instagram-sketched.svg"
import VkIcon from "../icons/Vk.com_icon-icons.com_55781.svg"
import EyeIcon from "../icons/eye-svgrepo-com.svg"

import styles from "../styles/header.module.css"
import { useStaticQuery } from "gatsby"

const Header = () => {
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
      }
    `
  )
  const lessThan720 = useMediaPredicate("(max-width: 720px)")
  return (
    <>
      <div className={styles.headerSecondary}>
        <div>
          <a className={styles.iconButton}>
            <InstagramIcon />
          </a>
          <a className={styles.iconButton}>
            <VkIcon />
          </a>
          <a className={styles.iconButton}>
            <EyeIcon />
          </a>
        </div>
      </div>
      <header className={styles.headerMain}>
        {lessThan720 ? <BurgerNav data={data}/> : <Navbar data={data}/>}
      </header>
    </>
  )
}

export default Header
