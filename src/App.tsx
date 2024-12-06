import { useState } from "react"
import "./App.css"
import { Home, About, Contact} from './views'


type Route = "Home" | "About" | "Contact"

const App = () => {
  const RoutView = ({ routeName }: {routeName: Route}) => {
    if(routeName === "Home") return <Home />
    if(routeName === "About") return <About />
    if(routeName === "Contact") return <Contact />

    return<h3>Ruta no encontrada</h3>
  }

  const [route, setRoute] = useState<Route>("Contact")

  return (
    <>
    <RoutView routeName={route} />
    {/* { route === "Home" ? <Home /> : null }
    { route === "About" ? <About /> : null }
    { route === "Contact" && <Contact /> } */}
    <div style={ { marginTop: "1rem" } }>
      <button onClick={ () => setRoute("Home") }>Ir a Home</button>
      <button onClick={ () => setRoute("About") }>Ir a About</button>
      <button onClick={ () => setRoute("Contact") }>Ir a Contact</button>
    </div>
    </>
  )
}

export default App
