import React from "react"
import useComponentVisible from "../hooks/useComponentVisible"

import SearchIcon from "../icons/search.svg"

import { Link } from "gatsby"

import styles from "../styles/header.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>
        <li className={styles.navItem}>
          <Link className={styles.textButton} to="/">
            Новости
          </Link>
        </li>
        <NavItem text="Сведения" arrow>
          <Dropdown>
            <DropdownItem text="Основные сведения" />
            <DropdownItem text="Основные сведения" />
            <DropdownItem text="Основные сведения" />
            <DropdownItem text="Основные сведения" />
            <DropdownItem text="Основные сведения" />
            <DropdownItem text="Основные сведения" />
            <DropdownItem text="Основные сведения" />
            <DropdownItem text="Основные сведения" />
            <DropdownItem text="Основные сведения" />
          </Dropdown>
        </NavItem>
        <NavItem text="Родителям" arrow />
        <NavItem text="Ученикам" arrow />
        <NavItem text="Учителям" arrow />
        <NavItem text="Образование" arrow />
        <li className={styles.navItem}>
          <a className={styles.searchIcon}>
            <SearchIcon />
          </a>
        </li>
      </ul>
    </nav>
  )
}

const NavItem = ({ text, children, arrow }) => {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false)

  const drawArrow = arrow => {
    if (arrow) {
      return <div className={styles.arrow}></div>
    }
  }

  return (
    <li
      ref={ref}
      className={styles.navItem}
      onClick={() => setIsComponentVisible(!isComponentVisible)}
    >
      <a className={styles.textButton}>
        {text}<span>{drawArrow(arrow)}</span>
      </a>
      {isComponentVisible && children}
    </li>
  )
}

const Dropdown = ({ children }) => {
  return <div className={styles.dropdown}>{children}</div>
}

const DropdownItem = ({ text }) => {
  return <Link className={styles.dropdownItem}>{text}</Link>
}

export default Navbar
