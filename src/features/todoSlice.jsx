import { createSlice } from '@reduxjs/toolkit'

export const filters = {
  ALL: "ALL",
  COMPLETED: "COMPLETED",
  NOT_COMPLETED: "NOT_COMPLETED"
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    value: [
      { id: 1, text: 'milky', completed: true },
      { id: 2, text: 'copi', completed: false },
      { id: 3, text: 'milly', completed: false },
    ],
    // default: show all todos
    filterBy: filters.ALL
  },
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload)
    },
    deleteTodo: (state, action) => {
      state.value = state.value.filter(todo => todo.id !== action.payload.id)
    },
    toggleCompleted: (state, action) => {
      state.value.map(todo => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed
        }
      })
    },
    filterBy(state, action) {
      state.filterBy = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, toggleCompleted, deleteTodo, filterBy } = todoSlice.actions

export default todoSlice.reducer