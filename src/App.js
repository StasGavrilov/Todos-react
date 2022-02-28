import React, { useState } from "react";
import uuidv4 from 'uuid/v4'
import Main from "./components/Main";

export const TodosContext = React.createContext()

function App() {
  const [todos, setTodos] = useState(testingTodos)

  function handleTodoAdd() {
    const newTodo = {
      id: uuidv4(),
      time: new Date(),
      text: '',
      isCompleted: false
    }

    setTodos([...todos, newTodo])
  }

  const todosContextValue = {
    handleTodoAdd
  }

  return (
    <TodosContext.Provider value={todosContextValue}>
      <Main />
    </TodosContext.Provider>
  )
}

const testingTodos = [
  {
    id: 1,
    name: 'ceate react app',
    person: 'stas',
    date: 'now'
  },
  {
    id: 2,
    name: 'review react app',
    person: 'vadim',
    date: 'tomorrow'
  },
]

export default App;