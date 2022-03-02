import React from 'react';

function Todo(props) {
    const {
        id,
        text,
        isCompleted
    } = props

    return (
        <div className='todo-wrapper'>
            <li>
                <span>{text}</span>
                <input type='checkbox' value={isCompleted} />
                <button>X</button>
            </li>
        </div>
    )
}

export default Todo;