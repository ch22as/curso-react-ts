import { Link, useNavigate } from "react-router-dom"

const Access = () => {
  const navigate = useNavigate()

  const hacerAdmin = () => {
    const user = { role: "admin" }
    localStorage.setItem("reactUser", JSON.stringify(user))
  }

  const back = () => {
    navigate(-1)
  }

  const replace = () => {
    navigate("/", { replace: true, flushSync: true })
  }

  return (
    <div style={ { display: "flex", flexDirection: "column", gap: "10px" } }>
      <Link to="/admin">Accede al panel de administración</Link>
      <button onClick={ hacerAdmin }>Hacer admin</button>
      <button onClick={ back }>Volver atras</button>
      <button onClick={ replace }>Sustituir</button>
    </div>
  )
}

export default Access
