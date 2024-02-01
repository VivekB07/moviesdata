import React, { useState, useEffect } from "react";
import { Container, Typography, Pagination } from "@mui/material";
import MovieList from "./MovieList";
import { makeStyles } from "@material-ui/styles";

let useStyle = makeStyles({
  views: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
  },
});

function Movie() {
  let classes = useStyle();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async (page) => {
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const startDate = "2023-12-01";
        const endDate = "2023-12-31";
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}&page=${page}&include_adult=false`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.results) {
          setMovies(data.results);
          setTotalPages(data.total_pages);
        } else {
          setError("No movies found!");
        }
      } catch (error) {
        setError(error);
      }
    };

    fetchMovies(currentPage);
  }, [currentPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h1" align="center" gutterBottom>
        Movies Released in December 2023
      </Typography>
      {error ? (
        <Typography variant="body1" color="error" align="center">
          {error}
        </Typography>
      ) : (
        <>
          <MovieList movies={movies} />
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            size="large"
            className={`${classes.views}`}
          />
        </>
      )}
    </Container>
  );
}

export default Movie;
