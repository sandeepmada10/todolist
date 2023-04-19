import React from 'react'

export default function Completed({ todos, handleDelete,completedTodo, handleUpdate, handleComplete }) {
    return (
        <div className='todolist'>
 {
        completedTodo.map((todo) => (
            <div key={todo.id} className='container'>&nbsp;&nbsp;
                <input type='checkbox' className='ckeckbox' checked onClick={()=>handleComplete(todo.id)}/>&nbsp;&nbsp;&nbsp;
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
