import React, { useEffect, useState } from 'react';
import TodoFilter from '../components/TodoFilter';
import '../index.css'
import StatusOfList from '../StatusOfList/StatusOfList';
import TodoList from '../TodoList/TodoList';

export default function Todo() {

    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([])
    const [editTodo, setEditTodo] = useState(null)
    const [completedTodo, setCompletedTodo] = useState(null);
    const [filter, setFilter] = useState(null)


    // const [error, setError] = useState(false);
    // const handleCompleted=()=>{
    //     const findTodo=todos.find((todo)=> todo.completed==='true')
    //     setCompletedTodo(findTodo)
    // }
    console.log(completedTodo);

    const handleSubmit = e => {
        e.preventDefault();
        if (!editTodo) {
            const newtodos = [...todos, { id: new Date().getTime(), title: task, completed: false }];
            setTodos(newtodos);
            setTask("");
        } else {
            updateTodo(task, editTodo.id, editTodo.completed)
        }
    }

    const handleUpdate = (id) => {
        const findTodo = todos.find((todo) => id === todo.id)
        setEditTodo(findTodo)
    }

    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) =>
            id === todo.id ? { title, id, completed } : todo
        )
        setTodos(newTodo);
        setEditTodo('');
    }

    useEffect(() => {
        if (editTodo) {
            setTask(editTodo.title)
        }
        else {
            setTask('')
        }
    }, [setTask, editTodo])


    const handleDelete = (id) => {
        const newposts = todos.filter((todo) => id !== todo.id);
        setTodos(newposts);
    }

    const handleComplete = (id) => {
        setTodos(
            todos.map((todo) => {
                if (id === todo.id) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            })
        )
        const findTodo=todos.find((todo)=> todo.completed===true)
        setCompletedTodo(findTodo)
    }

    console.log(todos);
    console.log(editTodo);
    console.log(filter)
    const decode = (string) => {
        return decodeURIComponent(
            window.atob(string).split("").map(function (c) {
                return "%" + ("00" + c.charCodeAt(0).toString(16).slice(-2));
            }).join("")
        );
    };

    const x = decode('eyJkYXRlVGltZSI6IjIwMjItMTEtMjBUMDU6MTQ6MzNaIiwiZGV2aWNlU3ViVHlwZSI6IkZ1bGwgZmFjZSIsIm1vZGVsIjoiSW50ZWdyYXRlZCBDYW1lcmEiLCJ0eXBlIjoiRmFjZSIsIm1ha2UiOiJHZW5lcmFsIiwic2VyaWFsTm8iOiIxNkMyRDg2QSIsImRldmljZVByb3ZpZGVyIjoiTlByaW1lIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4iLCJkZXZpY2VQcm92aWRlcklkIjoiTlByaW1lRFBTIn0');
    console.log(x);

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
                        {editTodo ? 'Update' : 'Add'}
                    </button>

                </form>
                <div className='filter-buttons'>&nbsp;
                    <StatusOfList action='All' setFilter={setFilter} />
                    <StatusOfList action='Active' setFilter={setFilter} />
                    <StatusOfList action='Completed' setFilter={setFilter} />
                </div>
            </center>


            {/* <TodoList
                todos={todos}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                handleComplete={handleComplete}
            /> */}
            <TodoFilter filter={filter} todos={todos} completedTodo={completedTodo} handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                handleComplete={handleComplete} />

        </div>
    )
}
