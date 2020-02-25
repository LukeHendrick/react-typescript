import React from "react";
import { Box } from "grommet";
import { Route } from "react-router-dom";
import { Route as routeType } from '../state/types';
import { routes } from '../state/routes';
import { actionType } from '../state/types';

type Props = {
  state?: any
  dispatch?: React.Dispatch<actionType>
}

const Main: React.FC<Props> = ({state, dispatch}: Props) => {
  return (
    <Box align="center" gridArea="main">
      {routes.map((route: routeType, i: number) => (
        <Route path={route.href} exact render={(props) => route.render(props, state, dispatch)} />
      ))}
    </Box>
  );
};

export default Main;
