import React from "react"
import styles from "../styles/sidemenu.module.css"

const SideMenu = () => {
  return (
    <div className={styles.column}>
      <ul className={styles.container}>
        <SideMenuItem text="О школе" arrow />
        <SideMenuItem text="Родителям" arrow />
        <SideMenuItem text="Ученикам" arrow />
        <SideMenuItem text="Учителям" arrow />
        <SideMenuItem text="Образование" arrow />
      </ul>
    </div>
  )
}

const SideMenuItem = ({ text, arrow }) => {
  const drawArrow = arrow => {
    if (arrow) {
      return <div className={styles.arrow}></div>
    }
  }
  return (
    <li className={styles.sideMenuItem}>
      <a className={styles.textButton}>{text}</a>
      {drawArrow(arrow)}
    </li>
  )
}

export default SideMenu
