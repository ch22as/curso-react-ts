import { useRef } from "react"
import FocusButton from "./FocusButton"

const ComponenteRefencias = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  // const focusInput = () => {
  //   document.getElementById('dni')?.focus()
  // }

  const focusInputRef = () => {
    console.log(inputRef.current)
    if (!inputRef.current) return

    inputRef.current.focus()
  }

  return(
    <div>
      {/* <button onClick={focusInputRef}>Rellena formulario</button> */}
      <FocusButton handleClick={focusInputRef} inputRef={inputRef}/>
      <br />
      <br />
      <br />
      <div>
        <input ref={inputRef} id='dni' type="text" placeholder="Escribe tu DNI"/>
        {/* <input ref={inputRef} id='nombre' type="text" placeholder="Escribe tu nombre"/> */}
      </div>
    </div>
  )
}

export default ComponenteRefencias
