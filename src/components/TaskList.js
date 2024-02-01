import React, { useState, useEffect } from "react";
import { Button, TextField, List, Typography, Container} from "@material-ui/core";
import TaskItem from "./TaskItem";
import UpdateTask from "./UpdateTask";
import { makeStyles } from '@material-ui/styles';

let useStyle = makeStyles({
  space: {
    marginTop:"20px",
  }
});
 
const TaskList = () => {
  let classes = useStyle();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editTask, setEditTask] = useState(null);
  const [isDialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const openEditDialog = (task) => {
    setEditTask(task);
    setNewTask(task.text);
    setDialogOpen(true);
  };

  const closeEditDialog = () => {
    setEditTask(null);
    setNewTask("");
    setDialogOpen(false);
  };

  const updateTask = (updatedText) => {
    if (updatedText.trim() && editTask) {
      const updatedTaskList = tasks.map((task) =>
        task.id === editTask.id ? { ...task, text: updatedText } : task
      );
      setTasks(updatedTaskList);
      closeEditDialog();
    }
  };

  return (
    <div className="tasklist">
      <Typography variant="h4">Task-List</Typography>
      <Container maxWidth="sm" className={`${classes.space}`}>
        <TextField
          label="Enter task"
          variant="outlined"
          fullWidth
          value={newTask}
          onChange={handleChange}
          InputProps={{style: { color: 'white' }}}
          InputLabelProps={{style: { color: 'white' }}}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
          onClick={editTask ? () => updateTask(newTask) : addTask}
        >
          {editTask ? "Update Task" : "Add Task"}
        </Button>
        <List className={`${classes.space}`}>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={() => deleteTask(task.id)}
              onEdit={() => openEditDialog(task)}
            />
          ))}
        </List>
        {tasks.length === 0 && (
          <Typography variant="h6" className={`${classes.space}`}>
            No tasks available.
          </Typography>
        )}

        <UpdateTask
          isOpen={isDialogOpen}
          onClose={closeEditDialog}
          task={editTask}
          onUpdate={(updatedText) => updateTask(updatedText)}
          onChange={handleChange}
        />
      </Container>
    </div>
  );
};

export default TaskList;
