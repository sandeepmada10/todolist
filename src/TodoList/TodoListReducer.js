import React from 'react'

export default function TodoListReducer({ todos, dispatch, setEditTodo }) {
    console.log(todos)
    return (
        <div className='todolist'>

            {
                todos.map((todo, index) => (
                    <div key={index} className='container'>&nbsp;&nbsp;
                        <input type='checkbox' className='ckeckbox' />&nbsp;&nbsp;&nbsp;
                        <span>{todo.task}</span>
                        <div>
                            <button className='edit'>Edit</button>&nbsp; &nbsp;
                            <button className='delete' onClick={() => dispatch({ type: 'delete-todo', payload: { index: index } })}>Delete</button>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}
