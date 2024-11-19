import { useState, useEffect } from "react"

function aumentaElValor (valorInicial: number) {
  return valorInicial + 1
}

const Contador = () => {
  const [valor, setValor] = useState(0)
  // const valor = estado[0]
  //   const funcionCambiarValor = estado[1]
  // let valor = 0

  function incrementaValor() {
    // setValor((valorAnterior) => valorAnterior + 1)
    // setValor((valorAnterior) => valorAnterior + 1)
    // setValor((valorAnterior) => valorAnterior + 1)
    setValor(aumentaElValor)
    console.log(valor)
  }

  // console.log(estado)

  return <div>
    <p id="valor">{valor}</p>
    <button onClick={incrementaValor}>Incrementar</button>
  </div>
}

export default Contador
//
