import { createContext } from "react";
import type { User } from "firebase/auth";

type AuthContextType = {
  user: User | null;
  loading: boolean;

  createUser: (
    email: string,
    password: string
  ) => Promise<any>;

  signIn: (
    email: string,
    password: string
  ) => Promise<any>;

  signInWithGoogle: () => Promise<any>;

  logOut: () => Promise<void>;
};


const AuthContext = createContext<AuthContextType | null>(null);


export default AuthContext;