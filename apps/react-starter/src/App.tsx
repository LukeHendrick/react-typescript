import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Grommet } from "grommet";
import {theme} from './utils/theme';
import Index from './components/Index';
const App: React.FC = () => {
  return (
    <Grommet full theme={theme}>
      <Router>
        <Index />
      </Router>
    </Grommet>
  );
};

export default App;
