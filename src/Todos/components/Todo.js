import React from 'react';

function Todo(props) {
    const {
        id,
        text,
        isCompleted,
        handleTodoDelete,
        handleTodoChange
    } = props

    return (
        <div className='todo-wrapper'>
            <li className='todo-list'>
                <span>{text} </span>
                <input type='checkbox' defaultChecked={isCompleted} className='checkbox' onClick={() => handleTodoChange(id)} />
                <button>Edit</button>
                <button onClick={() => handleTodoDelete(id)}>X</button>
            </li>
        </div>
    )
}

export default Todo;