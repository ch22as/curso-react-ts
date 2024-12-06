import { Outlet, Link } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <h1>Esta es mi app</h1>
      <nav style={ { display: "flex", gap: "1rem"} }>
        <Link to="/contact">Contacto</Link>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout
