import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField} from "@material-ui/core";

const UpdateTask = ({ isOpen, onClose, task, onUpdate, onChange }) => {
  const [editedTask, setEditedTask] = useState("");

  useEffect(() => {
    setEditedTask(task ? task.text : "");
  }, [task]);

  const handleUpdate = () => {
    onUpdate(editedTask);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Edit Task</DialogTitle>
      <DialogContent>
        <TextField
          label="Updated task"
          variant="outlined"
          fullWidth
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleUpdate} color="primary">
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateTask;
