import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const reactUser = localStorage.getItem("reactUser")
  console.log(reactUser)

  if (!reactUser) return <Navigate to="/" />

  return element
}

export default ProtectedRoute
