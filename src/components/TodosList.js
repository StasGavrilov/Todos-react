import React from 'react';
import Todo from './Todo';

function TodosList(props) {
    const { todos } = props

    return (
        todos.map(todo => {
            <Todo
                id={todo.id}
                date={todo.date}
                text={todo.text}
                isCompleted={todo.isCompleted}
            />
        })
    )
}

export default TodosList;