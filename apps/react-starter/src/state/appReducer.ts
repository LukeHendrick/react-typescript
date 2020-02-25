import { stateTypes, actionType } from "./types";
import { authReducer } from "./authReducer";
export const initState: stateTypes = {
  authState: "unauthenticated",
  user: null,
  session: null,
  credentials: null,
  isAdmin: false
};

export const initReducer = (state: stateTypes = initState) => {
  return state;
};

export const appReducer = (
  state: stateTypes,
  action: actionType
): stateTypes => {
  switch (action.component) {
    case "auth":
      return authReducer(state, action);
    default:
      return state;
  }
};
