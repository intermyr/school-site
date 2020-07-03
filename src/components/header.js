import React from "react";
import useComponentVisible from '../hooks/useComponentVisible';
import InstagramIcon from "../icons/instagram-sketched.svg"
import VkIcon from "../icons/Vk.com_icon-icons.com_55781.svg"
import EyeIcon from "../icons/eye-svgrepo-com.svg"
import SearchIcon from "../icons/search.svg"
import { Link } from "gatsby"
import styles from "../styles/header.module.css"

const Header = () => {
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
        <Navbar>
          <NavItem text="Новости" />
          <NavItem text="О школе" arrow>
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
        </Navbar>
      </header>
    </>
  )
}

const Navbar = ({ children }) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>{children}</ul>
    </nav>
  )
}

const NavItem = ({ text, children, arrow }) => {
  // const [open, setOpen] = useState(false)
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
      onClick={() => setIsComponentVisible(true)}
    >
      <a className={styles.textButton}>{text}</a>
      {isComponentVisible && children}
      {drawArrow(arrow)}
    </li>
  )
}

const Dropdown = ({ children }) => {
  return <div className={styles.dropdown}>{children}</div>
}
const DropdownItem = ({ text }) => {
  return <Link className={styles.dropdownItem}>{text}</Link>
}

export default Header
