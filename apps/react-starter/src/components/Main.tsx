import React from "react";
import { Box } from "grommet";
import { Route, RouteProps } from "react-router-dom";
import {AuthUtil} from '../utils/auth';
import { actionType } from '../state/types';
import Home from "./Home";
import Admin from "./Admin";

type Props = {
  state?: any
  dispatch?: React.Dispatch<actionType>
}

const Main: React.FC<Props> = ({state, dispatch}: Props) => {
  return (
    <Box align="center" gridArea="main">
      <Route path="/" exact render={(props) => <Home {...props} />} />
      <Route path="/admin" exact render={(props) => <Admin state={state} dispatch={dispatch} {...props}/>} />
      <Route path="/signout" exact render={() => {
        const Auth = new AuthUtil();
        Auth.signOut()
        return null
      }} />
    </Box>
  );
};

export default Main;
