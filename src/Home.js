import React, { useState } from "react";
import TodoForm from './components/TodoForm'
import TodoList from './components/Todolist'

const Home = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1>Ajouter une tâche:</h1>
      <TodoForm
        saveTodo={(titre, description) => {
          console.log(titre, description);
          // const trimmedText = todoText.trim();

          // if (trimmedText.length > 0) {
          //   setTodos([...todos, trimmedText]);
          // }
        }}
      />
      <h1>Mes tâches:</h1>
      <TodoList todos={todos}/>
    </div>
  )
}

export default Home;
