import React from "react";

const local_storage_key = 'react.todos'

function App() {


  return (
    <div>
      <h1>Stas's Todos</h1>
      <div>
        <input type='text' />
        <button>Add Todo</button>
      </div>

      <div className='stats'>
        <div className='total'>Total: <span>0</span></div>
        <div className='finished'>Finished: <span>0</span></div>
        <div className='left'>Left: <span>0</span></div>
      </div>

      <ol>
        {/* <TodosList /> */}
      </ol>
    </div>
  )
}

export default App;