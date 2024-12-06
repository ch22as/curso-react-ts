import { useEffect, useRef, useState } from "react"
import "../src/App.css"

interface Alumno {
  id: number
  nombre: string
  nota: number
}

const alumnos: Alumno[] = [
  {
    id: 1,
    nombre: 'Diego',
    nota: 8
  },
  {
    id: 2,
    nombre: 'Antonio',
    nota: 10
  },
  {
    id: 3,
    nombre: 'Adrian',
    nota: 10
  },
  {
    id: 4,
    nombre: 'Albert',
    nota: 8
  }
]

// interface Todo {
//   id: number | string,
//   texto: string,
//   completed: boolean
// }


const App = () => {

  // const [todos, setTodos] = useState<Todo[]>([])
  // const [inputValue, setInputValue] = useState("")
  const [notaMinima, setNotaMinima] = useState(0)

  const inputRef = useRef<HTMLInputElement>(null)

  const actualizarNotaMinima = () => {
    if(!inputRef.current?.value) return

    const valorDelInput = Number(inputRef.current.value)

    setNotaMinima(valorDelInput)

    console.log(valorDelInput)
    console.log(typeof valorDelInput)
  }


  return (
    <>
      <h1>Ejercicio de listas</h1>

      <input
        type="number"
        ref={inputRef}
        placeholder="Introduce la nota mínima"
      />

      <button onClick={actualizarNotaMinima}>Buscar</button>
      <ul>
        { alumnos.filter((alumno) => alumno.nota >= notaMinima).map((alumno) =>
          <li key={alumno.id}>
            {alumno.nombre}: {alumno.nota}
          </li>
        )}
      </ul>
    </>
  )
}

export default App
