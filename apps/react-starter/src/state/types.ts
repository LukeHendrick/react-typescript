export interface NavItem {
  href: string;
  text: string;
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
  type: "setAuthState" | "setUser" | "setSession" | "setCredentials" | "setIsAdmin";
  value: any;
}