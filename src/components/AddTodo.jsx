import {useDispatch } from 'react-redux'
import { addTodo } from '../features/todoSlice'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo() {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState('')

  return (
    <div>
      <input type="text" onChange={(e) => setTodo(e.target.value)}/>
      <button onClick={() => dispatch(addTodo({id: uuidv4(), text: todo, completed: false}))}>add</button>
    </div>
  )
}
