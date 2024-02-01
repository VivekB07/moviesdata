import React from "react";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

let useStyle = makeStyles({
  views: {
    maxHeight: "1.5em",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

function MovieItem({ movie }) {
  let classes = useStyle();
  const posterUrl = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;

  return (
    <Grid item xs={12} sm={8} md={4} lg={3} xl={2}>
      <Card style={{ width: "174px" }}>
        <CardMedia
          component="img"
          height="300"
          image={posterUrl}
          alt={movie.title}
          style={{ objectFit: "cover" }}
        />
        <CardContent>
          <Typography variant="h6" className={`${classes.views}`}>
            {movie.title}
          </Typography>
          {movie.release_date && (
            <Typography variant="body2" color="textSecondary">
              Released: {movie.release_date}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}

export default MovieItem;
