import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const navigate = useNavigate();

  // Update password and strength
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (!value) setPasswordStrength("");
    else if (value.length < 5) setPasswordStrength("Weak");
    else if (value.length < 8) setPasswordStrength("Medium");
    else setPasswordStrength("Strong");
  };

  // Password strength color
  const getStrengthColor = () => {
    switch (passwordStrength) {
      case "Weak":
        return "red";
      case "Medium":
        return "orange";
      case "Strong":
        return "green";
      default:
        return "black";
    }
  };

  // Confirm password color
  const getConfirmColor = () => {
    if (!confirmpassword) return "black";
    return password === confirmpassword ? "green" : "red";
  };

  const getConfirmText = () => {
    if (!confirmpassword) return "";
    return password === confirmpassword
      ? "Passwords match successfully!"
      : "Passwords do not match!";
  };

  // Handle form submit
  const handleSignup = (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmpassword) {
      alert("Please fill all fields!");
      return;
    }

    if (password !== confirmpassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Signup successful!");
    // Reset form
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmpassword("");
    setPasswordStrength("");

    navigate("/login"); // redirect to login page
  };

  return (
    <div style={{ width: "400px", margin: "auto", padding: "20px" }}>
      <h1>Signup Page</h1>
      <form onSubmit={handleSignup}>
        {/* Username */}
        <div style={{ marginBottom: "15px" }}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {!username && <p style={{ color: "red" }}>Username is required!</p>}
        </div>

        {/* Email */}
        <div style={{ marginBottom: "15px" }}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {!email && <p style={{ color: "red" }}>Email is required!</p>}
        </div>

        {/* Password */}
        <div style={{ marginBottom: "15px" }}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          <p style={{ color: getStrengthColor() }}>
            Password Strength: {passwordStrength}
          </p>
          {!password && <p style={{ color: "red" }}>Password is required!</p>}
        </div>

        {/* Confirm Password */}
        <div style={{ marginBottom: "15px" }}>
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {confirmpassword && (
            <p style={{ color: getConfirmColor() }}>{getConfirmText()}</p>
          )}
          {!confirmpassword && (
            <p style={{ color: "red" }}>Please confirm your password!</p>
          )}
        </div>

        <button type="submit" style={{ padding: "10px", width: "100%" }}>
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
