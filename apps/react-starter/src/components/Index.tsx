import React, {useReducer} from "react";
import { appReducer, initState, initReducer } from '../state/appReducer'
import { Grid } from "grommet";
import Head from "./Head";
import Main from "./Main";
import Foot from "./Foot";
import AuthWrapper from "./AuthWrapper";
const Index: React.FC = () => {
  const [state, dispatch] = useReducer(appReducer, initState, initReducer);
  return (
    <Grid
      fill
      rows={["xxsmall", "flex", "xxsmall"]}
      columns={["auto", "auto"]}
      areas={[["header header"], ["main main"], ["footer footer"]]}
    >
      <AuthWrapper state={state} dispatch={dispatch}>
      <Head />
      <Main state={state} dispatch={dispatch}/>
      <Foot />
      </AuthWrapper>
    </Grid>
  );
};

export default Index;
