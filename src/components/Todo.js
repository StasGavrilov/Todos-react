import React from 'react';

function Todo(props) {
    const {
        id,
        text,
        isCompleted
    } = props

    return (
        <div>
            <li>
                <span>{id}-{text}</span>
                <input type='checkbox' value={isCompleted} />
                <button>Delete</button>
            </li>
        </div>
    )
}

export default Todo;