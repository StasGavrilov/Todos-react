import React from 'react';
import Todo from './Todo';

function TodosList(props) {
    const { todos, handleTodoDelete } = props

    return (
        <>
            {todos.map(todo => {
                return <Todo
                    key={todo.id}
                    handleTodoDelete={handleTodoDelete}
                    id={todo.id}
                    text={todo.text}
                    isCompleted={todo.isCompleted}
                />
            })}
        </>
    )
}

export default TodosList;