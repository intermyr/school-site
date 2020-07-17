import React from "react"
import useComponentVisible from "../hooks/useComponentVisible"

import SearchIcon from "../icons/search.svg"

import { Link } from "gatsby"

import styles from "../styles/header.module.css"

const Navbar = ({ data }) => {
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
            {data.allMarkdownRemark.edges.map(({ node }) => {
              if (node.frontmatter.menu === "info") {
                return (
                  <DropdownItem
                    key={node.id}
                    slug={node.fields.slug}
                    text={node.frontmatter.title}
                  />
                )
              }
            })}
          </Dropdown>
        </NavItem>
        <NavItem text="Родителям" arrow>
          <Dropdown>
            {data.allMarkdownRemark.edges.map(({ node }) => {
              if (node.frontmatter.menu === "parents") {
                return (
                  <DropdownItem
                    key={node.id}
                    slug={node.fields.slug}
                    text={node.frontmatter.title}
                  />
                )
              }
            })}
          </Dropdown>
        </NavItem>
        <NavItem text="Ученикам" arrow>
          <Dropdown>
            {data.allMarkdownRemark.edges.map(({ node }) => {
              if (node.frontmatter.menu === "students") {
                return (
                  <DropdownItem
                    key={node.id}
                    slug={node.fields.slug}
                    text={node.frontmatter.title}
                  />
                )
              }
            })}
          </Dropdown>
        </NavItem>
        <NavItem text="Учителям" arrow>
          <Dropdown>
            {data.allMarkdownRemark.edges.map(({ node }) => {
              if (node.frontmatter.menu === "teachers") {
                return (
                  <DropdownItem
                    key={node.id}
                    slug={node.fields.slug}
                    text={node.frontmatter.title}
                  />
                )
              }
            })}
          </Dropdown>
        </NavItem>
        <NavItem text="Образование" arrow>
          <Dropdown>
            {data.allMarkdownRemark.edges.map(({ node }) => {
              if (node.frontmatter.menu === "education") {
                return (
                  <DropdownItem
                    key={node.id}
                    slug={node.fields.slug}
                    text={node.frontmatter.title}
                  />
                )
              }
            })}
          </Dropdown>
        </NavItem>
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
      onMouseOver={() => setIsComponentVisible(true)}
      onMouseLeave={() => setIsComponentVisible(false)}
    >
      <a className={styles.textButton}>
        {text}
        <span>{drawArrow(arrow)}</span>
      </a>
      {isComponentVisible && children}
    </li>
  )
}

const Dropdown = ({ children }) => {
  return <div className={styles.dropdown}>{children}</div>
}

const DropdownItem = ({ text, slug }) => {
  return (
    <Link className={styles.dropdownItem} to={slug}>
      {text}
    </Link>
  )
}

export default Navbar
