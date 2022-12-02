import { LOGIN, GET_MOVIES, GET_USER, LOGOUT } from "../actionTypes/actionTypes";
import { User } from "../types";

export const login = (user: User) => ({
  type: LOGIN,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});

export const getUser = () => ({
  type: GET_USER,
});

export const getMovies = (page: number) => ({
  type: GET_MOVIES,
  payload: page,
});
