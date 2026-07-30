import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  const authContext = useContext(AuthContext);

const { user, loading } = authContext!;

  const location = useLocation();


  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }


  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  return children;

};
export default PrivateRoute;