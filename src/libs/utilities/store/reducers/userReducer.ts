import { IS_AUTHORIZED, REGISTRED_USER } from "../../constants/sessionStorage";
import { GET_USER, LOGIN, LOGOUT } from "../actionTypes/actionTypes";
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
      sessionStorage.setItem(IS_AUTHORIZED, "1");
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
    case LOGOUT: {
      window.location.pathname = "/login";
      sessionStorage.removeItem(IS_AUTHORIZED);
      return {
        ...state,
        name: "",
        email: "",
      };
    }
    default:
      return state;
  }
};
export default userReducer;
