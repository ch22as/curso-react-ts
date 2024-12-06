import { useState } from "react"
import style from "./Counter.module.scss"

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <button
      className={
        `${style.customButton}
        ${style.otherStyles}
        ${count > 10 ? style.greaterThanTen : style.lowerThanTen}`
      }
      style={{
        // color: "red",
        boxShadow: `0 0 20px ${count > 10 ? "#fff" : "#00f" }`
      }}
      onClick={ () => setCount((prev) => prev + 1) }
    >
      { count }
    </button>
  )
}

export default Counter
