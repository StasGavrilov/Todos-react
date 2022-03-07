import React from 'react';

function Todo(props) {
    const {
        id,
        text,
        isCompleted,
        handleTodoDelete
    } = props

    return (
        <div className='todo-wrapper'>
            <li className='todo-list'>
                <span>{text} </span>
                <input type='checkbox' value={isCompleted} className='checkbox' />
                <button onClick={() => handleTodoDelete(id)}>X</button>
            </li>
        </div>
    )
}

export default Todo;