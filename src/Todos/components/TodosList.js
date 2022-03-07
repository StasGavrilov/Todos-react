import React from 'react';
import Todo from './Todo';

function TodosList(props) {
    const { todos, handleTodoDelete, handleTodoChange } = props

    return (
        <>
            {todos.map(todo => {
                return <Todo
                    key={todo.id}
                    handleTodoChange={handleTodoChange}
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