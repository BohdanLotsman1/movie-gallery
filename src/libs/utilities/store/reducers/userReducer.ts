import { IS_LOGGED, REGISTRED_USER } from "../../constants/sessionStorage";
import { GET_USER, LOGIN } from "../actionTypes/actionTypes";
import { Actions, UserInitialState } from "../types";

const initialState = {
  name: "",
  email: "",
};

const userReducer = (
  state: UserInitialState = initialState,
  { type, payload }: Actions
) => {
  switch (type) {
    case LOGIN: {
      window.location.pathname = "/";
      sessionStorage.setItem(IS_LOGGED, "1");
      return {
        ...state,
        name: payload.name,
        email: payload.email,
      };
    }
    case GET_USER: {
      const user = JSON.parse(sessionStorage.getItem(REGISTRED_USER) ?? "{}");
      return {
        ...state,
        name: user.name,
        email: user.email,
      };
    }
    default:
      return state;
  }
};
export default userReducer;
