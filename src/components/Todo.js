import React from 'react';
import { TodosContext } from '../App';

function Todo(props) {
    const {
        id,
        date,
        text,
        isCompleted
    } = props

    return (
        <div>
            <li>
                <span>{text}</span>
                <input type='checkbox' />
                <button>Edit</button>
                <button>Delete</button>
            </li>
        </div>
    )
}

export default Todo;