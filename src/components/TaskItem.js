import React from "react";
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";

const TaskItem = ({ task, onDelete, onEdit }) => {
  return (
    <ListItem key={task.id}>
      <ListItemText primary={task.text} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="edit" onClick={onEdit} style={{color:"white"}}>
          <Edit />
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={onDelete} style={{color:"white"}}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TaskItem;
