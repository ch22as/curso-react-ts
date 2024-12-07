import { Outlet } from "react-router-dom"
import styles from "./Layout.module.css"
import { NavBarComponent } from "../components/NavbarComponent"
import { links } from "../assets/constants"

const Layout = () => {
  return (
    <>
      <NavBarComponent links={ links } />
      <div className={ styles.Content }>
        <Outlet />
      </div>
    </>
  )
}

export default Layout
