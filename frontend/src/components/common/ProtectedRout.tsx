import { Navigate } from "react-router-dom";
import { storage } from "../../utils/storage";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({
  children,
}: ProtectedRouteProps) => {

  const isLoggedIn = storage.isAuthenticated();

  if (!isLoggedIn) {
    return <Navigate to="/signin" replace />;
  }

  return <>{children}</>;
};