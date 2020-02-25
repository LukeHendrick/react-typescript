import React from 'react';
import { Route, stateTypes, actionType } from "./types";
import Home from '../components/Home';
import Holidays from '../components/Holidays';
import Closures from '../components/Closures';
import Prompts from '../components/Prompts';
import Admin from '../components/Admin';
import { AuthUtil } from '../utils/auth';
export const routes: Route[] = [
  {
    href: "/",
    text: "Home",
    render: (props: any,state: stateTypes, dispatch: React.Dispatch<actionType>) => {
      return <Home state={state} dispatch={dispatch} {...props} />;
    }
  },
  {
    href: "/holidays",
    text: "Holidays",
    render: (props: any,state: stateTypes, dispatch: React.Dispatch<actionType>) => {
      return <Holidays state={state} dispatch={dispatch} {...props} />;
    }
  },
  {
    href: "/closures",
    text: "Closures",
    render: (props: any,state: stateTypes, dispatch: React.Dispatch<actionType>) => {
      return <Closures state={state} dispatch={dispatch} {...props} />;
    }
  },
  {
    href: "/prompts",
    text: "Prompts",
    render: (props: any,state: stateTypes, dispatch: React.Dispatch<actionType>) => {
      return <Prompts state={state} dispatch={dispatch} {...props}/>;
    }
  },
  {
    href: "/admin",
    text: "Admin",
    render: (props: any,state: stateTypes, dispatch: React.Dispatch<actionType>) => {
      return <Admin state={state} dispatch={dispatch} {...props} />;
    }
  },
  {
    href: "/signOut",
    text: "Sign Out",
    render: () => {
      const Auth = new AuthUtil();
      Auth.signOut()
      return null
    }
  }
];
