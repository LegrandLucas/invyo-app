import React, { useState } from 'react';
import { TextField, Select, MenuItem, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';




// const handleStatut = () => {
//   console.log("changement de statut")
// }


const useStyles = makeStyles(() => ({
  formStyles: {
    display: "flex",
    flexDirection: "column"
    },
}))


const TodoForm = ({ saveTodo }) => {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [statut, setStatut] = useState('');
  const [date, setDate] = useState('');
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleSubmit = e => {
    e.preventDefault();
    const Todos = []
    Todos.push({
      title: title,
      description: description,
      statut: statut,
      date: date
    })
    console.log(Todos)
    setTitle('');
    setDescription('');
    setStatut('');
    setDate('');
  }

  const handleClick = e => {
    e.preventDefault()
  }

  return (
    <form
      className={classes.formStyles}
      onSubmit={ e => {
        handleSubmit()
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        value={title}
      />
      <TextField
        variant="outlined"
        placeholder="Add description"
        margin="normal"
        onChange={(event) => {
          setDescription(event.target.value);
        }}
        value={description}
      />
      {/* <TextField
        variant="outlined"
        placeholder="Add date"
        margin="normal"
        onChange={(event) => {
          setDate(event.target.value);
        }}
        value={date}
      /> */}
      <TextField
        id="date"
        label="Date"
        type="date"
        defaultValue="2021-01-01"
        // className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(event) => {
          setDate(event.target.value);
        }}
      />
      {/* <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={statut}
        onChange={(event) =>
          setStatut(event.target.value)
        }
      >
        <MenuItem value={"doing"}>En cours</MenuItem>
        <MenuItem value={"done"}>Terminé</MenuItem>
      </Select> */}
      {/* <Button type="submit" color="primary" onClick={e => handleClick()}>Créer une tâche</Button> */}
    </form>
  );
};

export default TodoForm;
