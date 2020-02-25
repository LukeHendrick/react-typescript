import { copyState } from "../utils/reducerUtils";
import { stateTypes, actionType } from "../state/types";

export const authReducer = (state: stateTypes, action: actionType) => {
  const newState = copyState(state);
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
