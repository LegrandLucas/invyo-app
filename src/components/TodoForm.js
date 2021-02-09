import React, { useState } from 'react';
import { TextField, Select, MenuItem} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const handleStatut = () => {
  console.log("changement de statut")
}


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

  return (
    <form
      className={classes.formStyles}
      onSubmit={(event) => {
        event.preventDefault();
        setTitle('');
        setDescription('');
        setStatut('');
        setDate('');
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
      <TextField
        variant="outlined"
        placeholder="Add date"
        margin="normal"
        onChange={(event) => {
          setDate(event.target.value);
        }}
        value={date}
      />
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={statut}
        onChange={() =>
          handleStatut()
        }
      >
        <MenuItem value={"doing"}>En cours</MenuItem>
        <MenuItem value={"done"}>Terminé</MenuItem>
      </Select>
    </form>
  );
};

export default TodoForm;
