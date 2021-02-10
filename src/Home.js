import React, { useState, useEffect } from "react";
import TodoForm from './components/TodoForm'
import TodoList from './components/Todolist'

const Home = () => {
  // const [todos, setTodos] = useState([]);
  const [saveTodos, setSaveTodos] = useState([]);
  console.log(saveTodos)


  return (
    <div>
      <h1>Ajouter une tâche:</h1>
      <TodoForm saveTodos={setSaveTodos} />
      <h1>Mes tâches:</h1>
      <TodoList todos={saveTodos} />
    </div>
  )
}

export default Home;
