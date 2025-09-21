import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //c; //onst { login } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please fill all fields!");
      //setSuccess(false);
      return;
    }
    if (!username) {
      setError("Please fill username first!");
      // setSuccess(false);
      return;
    }
    if (!password) {
      setError("Please fill password!");
      //setSuccess(false);
      return;
    }
    const isAdmin = username.toLowerCase() === "admin"; // admin username
    setUser({ username, isAdmin });
    setSuccess("Login successfully!");
    alert("Login successfully!");
    if (isAdmin) {
      navigate("/admin");
    } else {
      navigate("/dashboard");
    }
    //navigate("/dashboard");
  };
  return (
    <div style={{ width: "400px", margin: "auto", padding: "20px" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "15px" }}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}

        <button type="submit" style={{ width: "100%", padding: "10px" }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
