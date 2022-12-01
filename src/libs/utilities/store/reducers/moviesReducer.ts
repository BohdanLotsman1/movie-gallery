import { GET_MOVIES } from "../actionTypes/actionTypes";
import { Actions, Movie, MoviesInitialState } from "../types";
import data from "../../constants/movies.json";

const initialState = {
  movies: [],
  hasMore: true,
};

const movieReducer = (
  state: MoviesInitialState = initialState,
  { type, payload }: Actions
) => {
  switch (type) {
    case GET_MOVIES: {
      const step = 20;
      const start = (payload - 1) * step;
      const end = payload * step;
      const movies: Array<Movie> = data.movies.slice(start, end);
      return {
        ...state,
        movies: [...state.movies, ...movies],
        hasMore: movies.length === step,
      };
    }
    default:
      return state;
  }
};
export default movieReducer;
