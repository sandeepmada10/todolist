import React, { useReducer, useState } from 'react';
import '../index.css'
import StatusOfList from '../StatusOfList/StatusOfList';
import TodoList from '../TodoList/TodoList';
import TodoListReducer from '../TodoList/TodoListReducer';
import Todo from './Todo';

function reducer(todos, action) {
    switch (action.type) {
        case 'add-todo':
            return [...todos, newTodo(action.payload.task)]
        case 'delete-todo':
            return todos.filter((todo, index) => index !== action.payload.index)
        default:
            return todos
    }
}

function newTodo(task) {
    return { task: task }
}

export default function TodoUseReducer() {

    const [task, setTask] = useState("");
    const [todos, dispatch] = useReducer(reducer, []);
    const [editTodo, setEditTodo] = useState(null)

    console.log(task);
    console.log(todos)

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'add-todo', payload: { task: task } })
        setTask("");
    }

    return (
        <div>
            <center>
                <h1>TodoMatic</h1>
                <h2>
                    What needs to be done?
                </h2>
                <form >
                    <input
                        type="text"
                        name="input"
                        placeholder='Add Todo'
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        className='input-text'
                    />
                    <button type="Add" className='add' onClick={handleSubmit}>
                        {editTodo ? 'Edit' : 'Add'}
                    </button>
                </form>
                <StatusOfList />
            </center>

            <TodoListReducer todos={todos} dispatch={dispatch} setEditTodo={setEditTodo} />
        </div>
    )
}
