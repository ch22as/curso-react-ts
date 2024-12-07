import { useSearchParams, Navigate } from "react-router-dom"

const Redirect = () => {
  const [searchParams] = useSearchParams()
  const redirectString = searchParams.get('redirect')
  const needRedirect = redirectString == "true"

  if(needRedirect) return <Navigate to="/" />

  return(
  <div>
    <h2>No hemos redireccionado</h2>
    <button onClick={() => window.location.href = "/"}>Volver a home</button>
  </div>)
}

export default Redirect
