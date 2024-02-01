// import React, { useState } from "react";
// import { TextField, FormControl, Button } from "@material-ui/core";

// export const TaskForm = ({ addTodo }) => {
//   const [value, setValue] = useState("");

//   const handleChange = (e) => {
//     console.log(e.target.value);
//     setValue(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (value) {
//       addTodo(value);
//       setValue("");
//     }
//   };

//   return (
//     <form className="TaskForm" onSubmit={handleSubmit}>
//       <TextField
//         type="text"
//         value={value}
//         onChange={handleChange}
//         label="What is the task today?"
//         variant="outlined"
//         //   className="task-input"
//         style={{ width: "100%", marginBottom:"1rem" }}
//       />
//       <Button
//         type="submit"
//         variant="contained"
//         color="primary"
//         className="task-btn"
//       >
//         Add Task
//       </Button>
//     </form>
//   );
// };



// import React, { useState } from "react";
// import { TextField, Button, FormControl, InputLabel, Box } from "@mui/material";

// export const TaskForm = ({ addTodo }) => {
//   const [value, setValue] = useState("");

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (value) {
//       addTodo(value);
//       setValue("");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <FormControl fullWidth>
//         {/* <InputLabel htmlFor="task-input">What is the task today?</InputLabel> */}
//         <TextField
//           //   id="task-input"
//           label="What is the task today?"
//           value={value}
//           onChange={handleChange}
//           margin="normal"
//           variant="outlined"
//         />
//       </FormControl>
//       <Box sx={{ mt: 2 }}>
//         <Button type="submit" variant="contained">
//           Add Task
//         </Button>
//       </Box>
//     </form>
//   );
// };



import React, { useState } from 'react';
import {
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Container,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';

export const Practice = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
      <TextField
        label="Enter task"
        variant="outlined"
        fullWidth
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: '10px' }}
        onClick={addTask}
      >
        Add Task
      </Button>
      <List style={{ marginTop: '20px' }}>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <ListItemText primary={task.text} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(task.id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      {tasks.length === 0 && (
        <Typography variant="h6" style={{ marginTop: '20px' }}>
          No tasks available.
        </Typography>
      )}
    </Container>
  );
};

// export default TaskForm;
