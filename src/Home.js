import React, { useState } from "react";
import TodoForm from './components/TodoForm'
import TodoList from './components/Todolist'

const Home = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1>Ajouter une tâche:</h1>
      <TodoForm/>
      <h1>Mes tâches:</h1>
      <TodoList/>
    </div>
  )
}

export default Home;
