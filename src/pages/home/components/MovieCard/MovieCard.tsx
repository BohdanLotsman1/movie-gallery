import React, { createContext } from "react";
import { Movie } from "../../../../libs/utilities/store/types";
import { useStyles } from "../../styles";
import ThumbDown from "@material-ui/icons/ThumbDown";
import { useSelector } from "react-redux";
import { userSelector } from "../../../../libs/utilities/store/selectors";
import { MovieInfoIcon } from "./MovieInfoIcon";

interface Props {
  movie: Movie;
}
const contextDefaultValue: {
  movie?: Movie;
} = {
  movie: undefined,
};

export const MovieContext = createContext(contextDefaultValue);

export const MovieCard = ({ movie }: Props) => {
  const classes = useStyles();
  const user = useSelector(userSelector);
  const imgPath = process.env.REACT_APP_IMAGE_SERVICE + movie.poster_path;
  const year = new Date(movie.release_date).getFullYear();
  const UnderneathString = `${movie.genres[0]}, ${movie.director}, ${year}`;
  const isLowRating = movie.vote_average < 7;
  return (
    <div className={classes.card}>
      <div className={classes.posterContainer}>
        <img className={classes.poster} src={imgPath} alt="" />
        <div className={classes.movieTitle}>{movie.title}</div>
        <MovieContext.Provider value={{ movie }}>
          <MovieInfoIcon />
        </MovieContext.Provider>
        {isLowRating && <ThumbDown className={classes.lowRating} />}
      </div>
      {user.email && (
        <div className={classes.movieUnderneath}>{UnderneathString}</div>
      )}
    </div>
  );
};
