import { createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: string,
  text: string,
  completed: boolean
}

const initialState: Todo[] = [
  { id: "1", text: "Sacar al perro", completed: false }
]

const todoSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    addTodo: (state, action) => { return [
      ...state,
      { id: crypto.randomUUID(), text: action.payload, completed: false }] },

    completeTodo: (state, action) => {
      return  state.map( todo => todo.id === action.payload ? { ...todo,completed: !todo.completed} : todo)
    }
  }
})

export const { addTodo, completeTodo } = todoSlice.actions

export default todoSlice.reducer;
