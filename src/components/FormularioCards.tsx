import { useState } from "react"

const colors = ["red", "yellow", "green", "blue", "white"]

const pickRandonColor = () => {
  const randonIndex = Math.floor(Math.random() * colors.length)
  return colors[randonIndex]
}

// TODO : Pendiente evitar propagacion al hacer click en el input


export const FormularioCards = () => {
  const [backgroundColor, setBackgroundColor] = useState("#d3d3d3")

  const changeColor = () => {
    const new_color = pickRandonColor()
    setBackgroundColor(new_color)
  }

  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    console.log('Has hecho click')
  }

  const HandleInputClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }


  return (
    <div onClick={changeColor}
      style={{
        padding: "1rem",
        backgroundColor,
        borderRadius: "1rem"
      }}
    >
      <input onClick={HandleInputClick} type="text" placeholder="Introduce tu nombre"/>
      <br />
      <br />
      <button onClick={handleButtonClick}>Haz click</button>
    </div>
  )
}
