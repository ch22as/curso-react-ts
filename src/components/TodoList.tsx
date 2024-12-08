import { useSelector, useDispatch } from "react-redux"
import { addTodo, completeTodo } from "../features/todo/todoSlice"
import { RootState } from "../app/store"
import { useRef } from "react"
import Check from "./Common/Check"

const TodoList = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const todos  = useSelector((state: RootState ) => state.todos)
  console.log(todos)

  const dispatch = useDispatch()

  const handleClick = () => {
    const newTodo = inputRef.current?.value
    dispatch(addTodo(newTodo))
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem"}}>
      <h3>TodoList</h3>

      <input
        type="text"
        placeholder="escribe una nueva todo"
        ref= { inputRef }
      />

      <button onClick={ handleClick }>Nuevo todo</button>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style= {{  textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
            onClick={() => dispatch(completeTodo(todo.id))}
          >
            {todo.text} - <Check />
          </li>


        ))}
      </ul>
    </div>
  )
}

export default TodoList
