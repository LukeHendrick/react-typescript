import { stateTypes } from "../state/types";

export const copyState = (state: stateTypes) => {
  return JSON.parse(JSON.stringify(state));
};
