import React from 'react'
import { useDispatch } from 'react-redux';
import { removeTodo, toggleComplete } from '../../reducer/TodoSlice';

const TodoItem = ({id, completed, text}) => {
  const dispatch = useDispatch();
  return (
    <li key={id}>
        <input type='checkbox' checked={completed} onChange={() => dispatch(toggleComplete({id}))}/>
        <span>{text}</span>
        <span className='delete' onClick={() => dispatch(removeTodo({id}))}>&times;</span>
    </li>
  )
}

export default TodoItem;
