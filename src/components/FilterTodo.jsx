import { useDispatch } from 'react-redux';
import { filterBy, filters } from '../features/todoSlice';

export default function FilterTodo() {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(filterBy(filters.ALL))}>All</button>
      <button onClick={() => dispatch(filterBy(filters.COMPLETED))}>Completed</button>
      <button onClick={() => dispatch(filterBy(filters.NOT_COMPLETED))}>
        Not completed
      </button>
    </>
  )
}
