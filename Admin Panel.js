
import React from "react";

const AdminPanel = () => {
  // Sample users
  const users = [
    { id: 1, name: "Yasir Raiyan", role: "Admin" },
    { id: 2, name: "John Doe", role: "User" },
    { id: 3, name: "Jane Smith", role: "User" },
  ];

  // Handlers
  const handleEdit = (id) => {
    alert(`Edit user with ID: ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Delete user with ID: ${id}`);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h2
        style={{ textAlign: "center", marginBottom: "30px", color: "#2c3e50" }}
      >
        Admin Panel
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              backgroundColor: "#f9f9f9",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              width: "250px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ marginBottom: "10px", color: "#34495e" }}>
              {user.name}
            </h3>
            <p style={{ marginBottom: "20px", color: "#7f8c8d" }}>
              Role: {user.role}
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button
                onClick={() => handleEdit(user.id)}
                style={{
                  padding: "8px 12px",
                  backgroundColor: "#3498db",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                style={{
                  padding: "8px 12px",
                  backgroundColor: "#e74c3c",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
