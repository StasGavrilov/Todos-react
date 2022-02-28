import React, { useContext } from 'react';
import TodosList from './TodosList';
import { TodosContext } from '../App';

function Main() {
    const { handleTodoAdd } = useContext(TodosContext)

    return (
        <div>
            <h1>Stas's Todos</h1>
            <div>
                <input type='text' />
                <button onClick={handleTodoAdd}>Add Todo</button>
            </div>

            <div className='stats'>
                <div className='total'>Total: <span>0</span></div>
                <div className='finished'>Finished: <span>0</span></div>
                <div className='left'>Left: <span>0</span></div>
            </div>

            <ol>
                <TodosList />
            </ol>
        </div>
    )
}

export default Main;