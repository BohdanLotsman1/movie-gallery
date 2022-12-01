import { combineReducers } from "redux";
import user from "./userReducer";
import movies from "./moviesReducer";

const reducer = combineReducers({
  movies,
  user,
});

export type State = ReturnType<typeof reducer>;
// eslint-disable-next-line
export default () => reducer;
