import React, { useState, useEffect } from "react";
import TodosList from "./TodosList";

const local_storage_key = 'react.todos'

function Todos() {
    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')

    const total = todos.length
    const finishedTodos = todos.filter(todo => todo.isCompleted === true)
    const done = finishedTodos.length
    const left = total - done

    useEffect(() => {
        const todoJSON = localStorage.getItem(local_storage_key)
        if (todoJSON != null) {
            return setTodos(JSON.parse(todoJSON))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(local_storage_key, JSON.stringify(todos))
    }, [todos])

    function handleTodoAdd() {
        const todo = {
            id: todos.length,
            text: text,
            isCompleted: false
        }

        setTodos([...todos, todo])
    }

    function handleText(event) {
        setText(event.target.value)
    }

    function handleTodoDelete(id) {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    function handleTodoChange(id) {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted
            }

            return todo
        })

        setTodos(newTodos)
        localStorage.setItem(local_storage_key, JSON.stringify(todos))
    }

    return (
        <div>
            <h1>Stas's Todos</h1>
            <div>
                <input type='text' onChange={handleText} />
                <button onClick={handleTodoAdd}>Add Todo</button>
            </div>

            <div className='stats'>
                <div className='total'>Total: <span>{total}</span></div>
                <div className='finished'>Finished: <span>{done}</span></div>
                <div className='left'>Left: <span>{left}</span></div>
            </div>

            <ol>
                <TodosList todos={todos} handleTodoDelete={handleTodoDelete} handleTodoChange={handleTodoChange} />
            </ol>
        </div>
    )
}

export default Todos;