import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ adminOnly }) => {
  const isLoggedIn = true;
  const isAdmin = true;

  if (!isLoggedIn) return <Navigate to="/login" replace />;
  if (adminOnly && !isAdmin) return <Navigate to="/" replace />;

  return <Outlet />; // ✅ render child route
};

export default ProtectedRoute;
