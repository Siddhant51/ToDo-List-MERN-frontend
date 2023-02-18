import React from 'react'
import './Todo.css'

const Todo = ({ text, updateMode, deleteTodo }) => {
  return (
    <div className='todo'>
      <div className="text">
        {text}
      </div>
      <div className="buttons">
        <div className="edit" onClick={updateMode}>Edit</div>
        <div className="delete" onClick={deleteTodo}>Delete</div>
      </div>
    </div>
  )
}

export default Todo
