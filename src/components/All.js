import React from 'react'
import TodoList from '../TodoList/TodoList'

export default function All({todos,handleDelete,handleUpdate, handleComplete}) {
  return (
    <div className='todolist'>

    {
        todos.map((todo, index) => (
            <div key={index} className='container'>&nbsp;&nbsp;
                <input type='checkbox' className='ckeckbox'  onClick={()=>handleComplete(todo.id)}/>&nbsp;&nbsp;&nbsp;
                <span>{todo.title}</span>
                <div>
                    <button className='edit' onClick={() => handleUpdate(todo.id)}>Edit</button>&nbsp; &nbsp;
                    <button className='delete' onClick={() => handleDelete(todo.id)}>Delete</button>
                </div>
            </div>

        ))
    }
</div>
  )
}
