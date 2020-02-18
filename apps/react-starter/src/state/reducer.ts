import { stateTypes, actionType } from "./types";

export const initState: stateTypes = {
  authState: "unauthenticated",
  user: null,
  session: null,
  credentials: null,
  isAdmin: false,
};

export const initReducer = (state: stateTypes = initState) => {
  return state;
};

const copyState = (state: stateTypes) => {
  return JSON.parse(JSON.stringify(state));
};

export const appReducer = (
  state: stateTypes,
  action: actionType
): stateTypes => {
  let newState = copyState(state);
  switch (action.type) {
    case "setAuthState":
      newState.authState = action.value;
      return newState;
    case "setUser":
      newState.user = action.value;
      return newState;
    case "setSession":
      newState.session = action.value;
      return newState;
    case "setCredentials":
      newState.credentials = action.value;
      return newState;
    case "setIsAdmin":
      newState.isAdmin = action.value;
      return newState;
    default:
      return state;
  }
};
