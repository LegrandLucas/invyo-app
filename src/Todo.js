import React, { useState } from "react";
import TodoForm from './components/TodoForm'
import TodoList from './components/Todolist'
import { Button } from '@material-ui/core';

const Todo = () => {
  const [saveTodos, setSaveTodos] = useState([]);
  const [old, setOld] = useState(false)
  console.log(old)

  const displayOld = () => {
    setOld(!old)
  }

  const tasksDoing = (arrayTodos) => {
    const doingTasks = arrayTodos.filter(object => object.statut === "doing");
    return doingTasks
  }
  const tasksDone = (arrayTodos) => {
    const doneTasks = arrayTodos.filter(object => object.statut === "done");
    return doneTasks
  }

  return (
    <div>
      <h1>Ajouter une tâche:</h1>
      <TodoForm saveTodos={setSaveTodos} />
      <h1>Mes tâches en cours:</h1>
      <TodoList todos={tasksDoing(saveTodos)} />
      <Button
        onClick={displayOld}
      >Afficher les tâches terminées
      </Button>
      {old ?
        <>
          <h1>Old tasks</h1>
          <TodoList todos={tasksDone(saveTodos)} />
        </>
        :
        " "
      }
    </div>
  )
}

export default Todo;
