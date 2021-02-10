import React, {useState, useEffect} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { TextField, Select, MenuItem, Button } from '@material-ui/core';


const TodoList = ({ todos }) => {
  const [updatedTodolist, setUpdatedTodolist] = useState()

  useEffect(() => {
    setUpdatedTodolist(todos);
  }, []);


  const deleteTodo = (todos, index) => {
    setUpdatedTodolist(todos.splice(index, 1))
  }

  return (
    <List>
      {todos.map((todo, index) => (
        <ListItem key={index.toString()} dense button>
              <ListItemText primary={todo.title} />
              <ListItemText primary={todo.description} />
              <ListItemText primary={todo.date} />
              <ListItemText primary={todo.statut} />
              <ListItemSecondaryAction>
                <IconButton
                  aria-label="Edit"
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  aria-label="Delete"
                  onClick={() => {
                    deleteTodo(todos, index);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
          </ListItem>
      ))}
    </List>
  )
}

export default TodoList;
