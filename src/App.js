import React, { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import { Button, Container } from "@mui/material";
import Movie from "./components/Movie";


const App = () => {
  const [showTaskList, setShowTaskList] = useState(false);
  const [showMovieWebsite, setShowMovieWebsite] = useState(false);

  const handleTaskList = () => {
    setShowTaskList((prev) => !prev);
    setShowMovieWebsite(false);
  };

  const handleMovieWebsite = () => {
    setShowTaskList(false);
    setShowMovieWebsite((prev) => !prev);
  };

  return (
    <Container>
      <div className="buttons">
        <Button
          variant="contained"
          color="primary"
          onClick={handleTaskList}
        >
          Show ToDoList
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleMovieWebsite}
        >
          Show Movie Website
        </Button>
      </div>
      <div className="views">
        {showTaskList && <TaskList />}
        {showMovieWebsite && <Movie />}
      </div>
    </Container>
  );
};

export default App;
