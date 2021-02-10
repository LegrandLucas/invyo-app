import React, { useState } from 'react';
import {TextField, Select, MenuItem, Button} from '@material-ui/core';

const TodoForm = ({ saveTodo }) => {
  // const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [statut, setStatut] = useState('');
  const [todos, setTodos] = useState();

  const todo =  {
    title,
    description,
    date,
    statut
  };

  const handleSubmit = e => {
    e.preventDefault();
    setTodos(todo);
    console.log(todos)
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        placeholder="Add title"
        margin="normal"
        onChange={e => setTitle(e.target.value)}
        value={title}
      />
      <TextField
        variant="outlined"
        placeholder="Add description"
        margin="normal"
        onChange={e => setDescription(e.target.value)}
        value={description}
      />
      <TextField
        id="date"
        label="Date"
        type="date"
        defaultValue="2021-01-01"
        // className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={e => setDate(e.target.value)}
        value={date}

      />
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={statut}
        onChange={e => setStatut(e.target.value)}
      >
        <MenuItem value={"doing"}>En cours</MenuItem>
        <MenuItem value={"done"}>Terminé</MenuItem>
      </Select>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Créer une tâche
      </Button>
    </form>
  );
};

export default TodoForm;
