import { Link } from "react-router-dom"
import styles from "../layouts/Layout.module.css"
import type { LinkElement } from "../types"

export const NavBarComponent = ({ links }: { links: LinkElement[] } ) => {
  return (
    <nav className={ styles.NavBar }>
      { links.map((link) => (
        <Link key={link.url} to={ link.url }>{ link.name }</Link>
      ))}
    </nav>
  )

}
