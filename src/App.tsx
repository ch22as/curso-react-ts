import { useState } from "react"
import "./App.css"
import { Home, About, Contact, Counter, FormularioClasico, FormularioClasicoRef } from './views'


type Route = "Home" | "About" | "Contact" | "Counter" |  "FormularioClasico" | "FormularioClasicoRef"

const App = () => {
  const RoutView = ({ routeName }: {routeName: Route}) => {
    if(routeName === "Home") return <Home />
    if(routeName === "About") return <About />
    if(routeName === "Contact") return <Contact />
    if(routeName === "Counter") return <Counter />
    if(routeName === "FormularioClasico") return <FormularioClasico />
    if(routeName === "FormularioClasicoRef") return <FormularioClasicoRef />

    return<h3>Ruta no encontrada</h3>
  }

  const [route, setRoute] = useState<Route>("FormularioClasicoRef")

  return (
    <div>
      <RoutView routeName={route} />
      {/* { route === "Home" ? <Home /> : null }
      { route === "About" ? <About /> : null }
      { route === "Contact" && <Contact /> } */}
      <div style={ { marginTop: "1rem", display: 'none' } }>
        <button onClick={ () => setRoute("Home") }>Ir a Home</button>
        <button onClick={ () => setRoute("About") }>Ir a About</button>
        <button onClick={ () => setRoute("Contact") }>Ir a Contact</button>
        <button onClick={ () => setRoute("FormularioClasico") }>Ir a FormularioClasico</button>
        <button onClick={ () => setRoute("FormularioClasicoRef") }>Ir a FormularioClasicoRef</button>
      </div>
    </div>
  )
}

export default App
