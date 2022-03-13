import React from 'react';
import Todo from './Todo';

function TodosList(props) {
    const { todos, handleTodoDelete, handleTodoChange } = props

    return (
        <div>
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
        </div>
    )
}

export default TodosList;