import React, { useEffect, useState } from "react";
import { fetchEvents, createEvent, deleteEvent } from "../eventService";
//import { fetchEvents, createEvent, deleteEvent } from "../api/eventService";

const EventTest = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch events on mount
  useEffect(() => {
    const getEvents = async () => {
      setLoading(true);
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getEvents();
  }, []);

  // Create a new event
  const handleCreate = async () => {
    const newEvent = { title: "New Event", body: "This is a test", userId: 1 };
    try {
      const created = await createEvent(newEvent);
      alert(`Event Created with ID: ${created.id}`);
      setEvents((prev) => [...prev, created]);
    } catch (err) {
      alert(err.message);
    }
  };

  // Delete an event
  const handleDelete = async (id) => {
    try {
      const res = await deleteEvent(id);
      if (res.success) {
        alert(`Event deleted! Status: ${res.status}`);
        setEvents((prev) => prev.filter((e) => e.id !== id));
      } else {
        alert(res.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Event Test</h2>
      <button onClick={handleCreate}>Create Event</button>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.title}{" "}
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventTest;
