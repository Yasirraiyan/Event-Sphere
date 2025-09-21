import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
      <Link to="/">Home</Link>
      {!user && <Link to="/login">Login</Link>}
      {!user && <Link to="/signup">Signup</Link>}
      {user && <Link to="/dashboard">Dashboard</Link>}
      {user?.role === "admin" && <Link to="/admin">Admin</Link>}
      {user && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
}

export default Navbar;
