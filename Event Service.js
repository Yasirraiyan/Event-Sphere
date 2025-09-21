const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Fetch events
export const fetchEvents = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data.slice(0, 5);
};

// Create a new event
export const createEvent = async (event) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event),
  });

  if (res.status === 201 || res.status === 200) {
    return await res.json();
  } else if (res.status === 404) {
    throw new Error("Not find any URL! Not found!");
  } else if (res.status === 403) {
    throw new Error("Forbidden!");
  } else if (res.status === 500) {
    throw new Error("Server Error!");
  } else {
    throw new Error(`Unknown Error! ${res.status}`);
  }
};

// Delete an event
export const deleteEvent = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (res.status === 200 || res.status === 204) {
    return { success: true, status: res.status };
  } else if (res.status === 404) {
    return { success: false, status: 404, message: "Not get Any Event" };
  } else if (res.status === 500) {
    return { success: false, status: 500, message: "Server Error!" };
  } else if (res.status === 403) {
    return { success: false, status: 403, message: "Forbidden!" };
  } else {
    return { success: false, status: res.status, message: "Unknown Error!" };
  }
};
