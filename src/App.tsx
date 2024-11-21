import { useState } from "react"
import "./App.css"
import ComponenteFuncionalCicloDeVida from "./components/ComponenteFuncionalCicloDeVida";
import { generaNombre } from "./lib/utils";

const muyLenta = () => {
  const datos = 1000000

  for (let i = 0; i < datos; i++){
    let a = 1
  }
}

const funcionAsincrona = () => {
  return new Promise((res) => {
      setTimeout(() => {
        res(true)
      }, 2000)
  })
}


function App() {
  const [visible, setVisible] = useState(false)
  const [nombre, setNombre] = useState< string | null >(null)

  const toggleVisible = async () => {
    // const miConstante = { nombre: generaNombre }
    // setNombre(miConstante.nombre)
    // console.time('función lenta')
    // muyLenta()
    // console.timeEnd('función lenta')
    // setVisible(vis => !vis)
    await funcionAsincrona()
    console.log(true)
  }

  return (
    <div>
      { visible ? <ComponenteFuncionalCicloDeVida /> : null}
      <button onClick={ toggleVisible } id={ nombre || 'idGenerico' }>{visible ? 'Ocultar' : 'Mostrar' }</button>
      {nombre && <p>Hola {nombre}</p>}
    </div>
  )
}

export default App
