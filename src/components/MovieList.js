import React from 'react';
import { Grid } from '@mui/material';
import MovieItem from './MovieItem';

function MovieList({ movies }) {
  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </Grid>
  );
}

export default MovieList;
