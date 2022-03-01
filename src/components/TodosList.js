import React from 'react';
import Todo from './Todo';

function TodosList(props) {
    const { todos } = props

    return (
        <>
            {todos.map(todo => {
                console.log(todo)
                return < Todo
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    isCompleted={todo.isCompleted}
                />
            })}
        </>
    )
}

export default TodosList;