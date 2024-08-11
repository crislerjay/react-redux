import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import FilterTodo from './components/FilterTodo'

function App() {

  return (
    <>
      <h1>TODO APP</h1>
      <AddTodo />
      <FilterTodo />
      <TodoList />
    </>
  )
}

export default App
