import React, { useContext } from "react";
import { useStyles } from "../../styles";
import { MovieContext } from "./MovieCard";

export const MovieInfo = () => {
  const { movie } = useContext(MovieContext);
  const classes = useStyles();
  return (
    <div className={classes.infoContainer}>
      <div className={classes.infoItem}>User rating: {movie?.vote_average}</div>
      <div className={classes.infoItem}>Writer: {movie?.writer}</div>
      <div className={classes.infoItem}>Actors: {movie?.actors.join(",")}</div>
      <div className={classes.infoItem}>Plot: {movie?.overview}</div>
    </div>
  );
};
