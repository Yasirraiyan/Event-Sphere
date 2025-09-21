import React from "react";

function EventCard({ event, onDelete }) {
  const handleDelete = (e) => {
    e.stopPropagation(); // stop parent click
    onDelete(event.id);
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
        cursor: "pointer",
      }}
    >
      <h3>{event.title}</h3>
      <p>{event.body}</p>
      <button onClick={handleDelete} style={{ color: "red" }}>
        Delete
      </button>
    </div>
  );
}

export default EventCard;
