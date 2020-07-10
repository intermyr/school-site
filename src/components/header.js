import React from "react"
import { useMediaPredicate } from "react-media-hook"
import Navbar from "./navbar"
import BurgerNav from "./burgerNav"

import InstagramIcon from "../icons/instagram-sketched.svg"
import VkIcon from "../icons/Vk.com_icon-icons.com_55781.svg"
import EyeIcon from "../icons/eye-svgrepo-com.svg"

import styles from "../styles/header.module.css"

const Header = () => {
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
        {lessThan720 ? <BurgerNav/> : <Navbar/>}
      </header>
    </>
  )
}

export default Header
