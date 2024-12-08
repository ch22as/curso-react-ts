// import { useState } from "react"
import "./App.css"
// import Settings from "./components/Settings"
import TodoList from "./components/TodoList"

const App = () => {
  // const [isDarkMode, setIsDarkMode] = useState<boolean>(true)

  return (
    // <Settings isDarkMode={ isDarkMode } setIsDarkMode={ setIsDarkMode} />
    <TodoList />
  )
}

export default App
