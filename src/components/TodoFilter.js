import React from 'react'
import Active from './Active'
import All from './All'
import Completed from './Completed'

export default function TodoFilter({ filter, todos,completedTodo, handleDelete, handleUpdate, handleComplete }) {
    return (
        <div>
            {filter === 'All' ? <All todos={todos} handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                handleComplete={handleComplete} /> : ''}
            {filter === 'Active' ? <Active /> : ''}
            {filter === 'Completed' ? <Completed completedTodo={completedTodo}/> : ''}
        </div>
    )
}
