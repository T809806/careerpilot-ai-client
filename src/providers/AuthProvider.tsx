import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import AuthContext from "../context/AuthContext";
import auth, {
  googleLogin,
  loginUser,
  logoutUser,
  registerUser,
} from "../services/auth.service";

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (
  email: string,
  password: string
) => {
  setLoading(true);

  try {
    return await registerUser(email, password);
  } finally {
    setLoading(false);
  }
};

  const signIn = (
    email: string,
    password: string
  ) => {
    setLoading(true);
    return loginUser(email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return googleLogin();
  };

  const logOut = () => {
    setLoading(true);
    return logoutUser();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;