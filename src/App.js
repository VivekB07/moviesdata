import React, { useState } from "react";
import "./App.css";
import { Button, Container } from "@mui/material";
import TaskList from "./components/TaskList";
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
          Show Task 1
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleMovieWebsite}
        >
          Show Task 3
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
