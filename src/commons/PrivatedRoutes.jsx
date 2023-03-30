import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ user, children, redirectTo = "/login" }) => {
  if (!user.email) {
    return (
      <>
        <Navigate to={redirectTo} />
      </>
    );
  }

  return children;
};
