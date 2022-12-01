export interface User {
  name: string;
  email: string;
  password: string;
}

export interface UserInitialState {
  name: string;
  email: string;
}

export interface MoviesInitialState {
  movies: Array<Movie>;
  hasMore: boolean;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genres: Array<string>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  actors: Array<string>;
  director: string;
  writer: string;
}

export interface Actions {
  type: string;
  payload?: any;
  meta?: any;
}
