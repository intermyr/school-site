import React, { useState } from "react"
import useComponentVisible from "./../hooks/useComponentVisible"

import BurgerIcon from "../icons/open-menu.svg"
import SearchIcon from "../icons/search.svg"

import styles from "../styles/header.module.css"
import { Link } from "gatsby"

const BurgerNav = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <nav className={styles.navbar}>
        <a className={styles.searchIcon}>
          <SearchIcon />
        </a>
        <BurgerButton onClick={() => setOpen(!isOpen)} />
      </nav>
      {isOpen && (
        <BurgerMenu>
          <li className={styles.burgerMenuItem}>
            <Link className={styles.textButton} to="/">
              Новости
            </Link>
          </li>
          <BurgerMenuItem text="Сведения" arrow>
            <BurgerSubMenu>
              <BurgerSubMenuItem text="Сведения" />
              <BurgerSubMenuItem text="Сведения" />
              <BurgerSubMenuItem text="Сведения" />
              <BurgerSubMenuItem text="Сведения" />
              <BurgerSubMenuItem text="Сведения" />
              <BurgerSubMenuItem text="Сведения" />
              <BurgerSubMenuItem text="Сведения" />
              <BurgerSubMenuItem text="Сведения" />
            </BurgerSubMenu>
          </BurgerMenuItem>
          <BurgerMenuItem text="Родителям" arrow />
          <BurgerMenuItem text="Ученикам" arrow />
          <BurgerMenuItem text="Учителям" arrow />
          <BurgerMenuItem text="Образование" arrow />
        </BurgerMenu>
      )}
    </>
  )
}

const BurgerButton = ({ children, arrow, text, onClick }) => {
  return (
    <a className={styles.burgerButton} onClick={onClick}>
      <BurgerIcon />
    </a>
  )
}

const BurgerMenu = ({ children }) => {
  return (
    <div className={styles.burgerMenu}>
      <ul>{children}</ul>
    </div>
  )
}

const BurgerMenuItem = ({ text, children }) => {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false)
  return (
    <>
      <li
        ref={ref}
        onClick={() => setIsComponentVisible(!isComponentVisible)}
        className={styles.burgerMenuItem}
      >
        <a className={styles.textButton}>{text}</a>
      </li>
      {isComponentVisible && children}
    </>
  )
}

const BurgerSubMenu = ({ children }) => {
  return <div className={styles.burgerSubMenu}>{children}</div>
}

const BurgerSubMenuItem = ({ text }) => {
  return <Link className={styles.burgerSubMenuItem}>{text}</Link>
}

export default BurgerNav
