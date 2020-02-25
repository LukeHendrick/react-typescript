export interface Route {
  href: string;
  text: string;
  render: (props: any, state?: any, dispatch?: any) => any;
}

export type User = {
  id: number;
  name: string;
};

export interface stateTypes {
  authState: string;
  user: any;
  session: any;
  credentials: any;
  isAdmin: boolean;
}

export interface actionType {
  type:
    | "setAuthState"
    | "setUser"
    | "setSession"
    | "setCredentials"
    | "setIsAdmin";
  value: any;
  component: "auth";
}
