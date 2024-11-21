import { useState } from "react"
import "./App.css"
import { FormularioEjemplo } from "./components/FormularioEjemplo"

function App() {
  const [nombre, setNombre] = useState('')
  function handleClick() {
    console.log('handleClick')
  }

// function devuelveFuncion () {
//   return () => {
//     console.log('Función dentro de la función')
//   }
// }
  const handleSubmit = (evento:  React.FormEvent) => {
    evento.preventDefault()
    console.log(evento)
    // Aqui hacemos las llamadas
    // fetch('https://api.pruebas.com//usuarios', {
    //   method: 'POST',
    //   body: JSON.stringify({})
    // })
    console.log('He enviado el formulario')
  }

  const handleChange = (evento:  React.ChangeEvent<HTMLInputElement>) => {
    console.log(evento.target.value)
    setNombre(evento.target.value)
  }

  return (
    <div>
      <h1>Eventos</h1>
      <FormularioEjemplo />
      {/* <button onClick={ handleClick } >Haz click</button> */}
      {/* <button onClick={ handleClick() } >Haz click</button> */}
      {/* <button onClick={ () => console.log('Evento') } >Haz click</button> */}
      {/* <button onClick={ devuelveFuncion() } >función generadora</button> */}
      {/* <form onSubmit={handleSubmit}>
        <input type="text" value={ nombre } onChange={ handleChange }/>
        <button type="submit">Enviar</button>
      </form> */}
    </div>
  )
}

export default App
