import { useSelector, useDispatch } from 'react-redux'
import { toggleCompleted, deleteTodo, filters } from '../features/todoSlice'

export default function TodoList() {
  const todos = useSelector((state) => state.todos.value)
  const filter = useSelector((state) => state.todos.filterBy);
  const dispatch = useDispatch()

  const filteredTodo = () => {
    if(filter === filters.COMPLETED) {
      return todos.filter(todo => todo.completed);
    }
    if(filter === filters.NOT_COMPLETED) {
      return todos.filter(todo => !todo.completed)
    }
    // if none of above return all todos
    return todos;
  }

  return (
    <div>
      {filteredTodo().map(todo => (
        <div key={todo.id}>
          <p className={todo.completed ? 'completed' : ''}>{todo.text}</p>
          <button onClick={() => dispatch(toggleCompleted({id: todo.id}))}>toggle</button>
          <button onClick={() => dispatch(deleteTodo({id: todo.id}))}>delete</button>
        </div>
      ))}
      <p>{todos.length}</p>
    </div>
  )
}
