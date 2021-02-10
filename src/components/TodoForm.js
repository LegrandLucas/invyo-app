import React, { useState, useEffect } from 'react';
import {TextField, Select, MenuItem, Button} from '@material-ui/core';

const TodoForm = ({ saveTodos }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [statut, setStatut] = useState('');
  const [todos, setTodos] = useState([]);
  let allTodos = []


  const todo =  {
    title,
    description,
    date,
    statut
  };

  const handleSubmit = e => {
    e.preventDefault();
    allTodos = [...todos, todo]
    setTodos(allTodos);
    saveTodos(todos);
    setTitle('');
    setDescription('');
    setDate('');
  }

  const getTheStatut = (todoDeadline) => {
    let today = new Date();
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let year = today.getFullYear();

    const nums = todoDeadline.split("-")
    const total = (nums[0] - year, nums[1] - month, nums[2] - day)

    total <= 0 ? setStatut("done") : setStatut("doing")
  }


  useEffect(() => {
    saveTodos(todos);
    getTheStatut(date)
  }, [allTodos]);

  return (
    <form noValidate onSubmit={handleSubmit}>
      <TextField
        label="Add title"
        variant="outlined"
        margin="normal"
        onChange={e => setTitle(e.target.value)}
        value={title}
      />
      <TextField
        label="Add description"
        variant="outlined"
        margin="normal"
        onChange={e => setDescription(e.target.value)}
        value={description}
      />
      <TextField
        label="Date"
        id="date"
        type="date"
        defaultValue="2021-01-01"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={e => setDate(e.target.value)}
        value={date}

      />
      <TextField
        label="Statut"
        variant="outlined"
        margin="normal"
        value={statut}
      />
      {/* <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={statut}
        onChange={e => setStatut(e.target.value)}
      >
        <MenuItem value={"doing"}>En cours</MenuItem>
        <MenuItem value={"done"}>Terminé</MenuItem>
      </Select> */}
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
