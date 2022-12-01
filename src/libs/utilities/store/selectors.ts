import { State } from "./reducers";

export const hasMoreMoviesSelector = (state: State) => state.movies.hasMore;
export const moviesSelector = (state: State) => state.movies.movies;

export const userSelector = (state: State) => state.user;
