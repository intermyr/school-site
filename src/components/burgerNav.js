import React, { useState } from "react"
import useComponentVisible from "./../hooks/useComponentVisible"

import BurgerIcon from "../icons/open-menu.svg"
import CloseIcon from "../icons/close.svg"
import SearchIcon from "../icons/search.svg"

import styles from "../styles/header.module.css"
import { Link } from "gatsby"

const BurgerNav = ({ data }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <nav className={styles.navbar}>
        <a className={styles.searchIcon}>
          <SearchIcon />
        </a>
        <BurgerButton onClick={() => setOpen(!isOpen)} isOpen={isOpen} />
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
              {data.allMarkdownRemark.edges.map(({ node }) => {
                if (node.frontmatter.menu === "info") {
                  return (
                    <BurgerSubMenuItem
                      key={node.id}
                      slug={node.fields.slug}
                      text={node.frontmatter.title}
                    />
                  )
                }
              })}
            </BurgerSubMenu>
          </BurgerMenuItem>
          <BurgerMenuItem text="Родителям" arrow>
            <BurgerSubMenu>
              {data.allMarkdownRemark.edges.map(({ node }) => {
                if (node.frontmatter.menu === "parents") {
                  return (
                    <BurgerSubMenuItem
                      key={node.id}
                      slug={node.fields.slug}
                      text={node.frontmatter.title}
                    />
                  )
                }
              })}
            </BurgerSubMenu>
          </BurgerMenuItem>
          <BurgerMenuItem text="Ученикам" arrow>
            <BurgerSubMenu>
              {data.allMarkdownRemark.edges.map(({ node }) => {
                if (node.frontmatter.menu === "students") {
                  return (
                    <BurgerSubMenuItem
                      key={node.id}
                      slug={node.fields.slug}
                      text={node.frontmatter.title}
                    />
                  )
                }
              })}
            </BurgerSubMenu>
          </BurgerMenuItem>
          <BurgerMenuItem text="Учителям" arrow>
            <BurgerSubMenu>
              {data.allMarkdownRemark.edges.map(({ node }) => {
                if (node.frontmatter.menu === "teachers") {
                  return (
                    <BurgerSubMenuItem
                      key={node.id}
                      slug={node.fields.slug}
                      text={node.frontmatter.title}
                    />
                  )
                }
              })}
            </BurgerSubMenu>
          </BurgerMenuItem>
          <BurgerMenuItem text="Образование" arrow>
            <BurgerSubMenu>
              {data.allMarkdownRemark.edges.map(({ node }) => {
                if (node.frontmatter.menu === "education") {
                  return (
                    <BurgerSubMenuItem
                      key={node.id}
                      slug={node.fields.slug}
                      text={node.frontmatter.title}
                    />
                  )
                }
              })}
            </BurgerSubMenu>
          </BurgerMenuItem>
        </BurgerMenu>
      )}
    </>
  )
}

const BurgerButton = ({ onClick, isOpen }) => {
  return (
    <a className={styles.burgerButton} onClick={onClick}>
      {isOpen ? <CloseIcon /> : <BurgerIcon />}
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
  } = useComponentVisible(true)
  return (
    <li ref={ref} className={styles.burgerMenuItem}>
      <a className={styles.textButton}>{text}</a>
        {children}
    </li>
  )
}

const BurgerSubMenu = ({ children }) => {
  return <ul className={styles.burgerSubMenu}>{children}</ul>
}

const BurgerSubMenuItem = ({ text, slug }) => {
  return (
    <Link className={styles.burgerSubMenuItem} to={slug}>
      {text}
    </Link>
  )
}

export default BurgerNav
