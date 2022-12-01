import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../../libs/utilities/store/actions.ts/actions";
import { useStyles } from "../styles";
import {
  hasMoreMoviesSelector,
  moviesSelector,
} from "../../../libs/utilities/store/selectors";
import useBodyScroll from "../../../hooks/useBodyScroll";
import { MovieCard } from "./MovieCard/MovieCard";

export const Browse = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(1);
  const hasMore = useSelector(hasMoreMoviesSelector);
  const movies = useSelector(moviesSelector);
  const classes = useStyles();

  useEffect(() => {
    if (movies.length) return;
    dispatch(getMovies(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScrollCb = (position: number) => {
    const loadMore = position > 90 && hasMore;
    if (loadMore) {
      dispatch(getMovies(page + 1));
      setPage(page + 1);
    }
  };

  useBodyScroll(handleScrollCb);

  return (
    <div className={classes.wrapper}>
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};
