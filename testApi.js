import { fetchEvents, createEvent, deleteEvent } from "./api/eventService";
const testFetch = async () => {
  try {
    const events = await fetchEvents();
    console.log("Fetched Events:", events);
    console.log("Status: 200 OK");
  } catch (err) {
    console.error("Fetch Error:", err.message);
  }
  const testCreate = async () => {
    const newEvent = {
      title: "Test Event",
      body: "This is a test event",
      userId: 1,
    };

    try {
      const result = await createEvent(newEvent);
      console.log("Event Created:", result);
      console.log("Status: 201 Created / 200 OK");
    } catch (err) {
      console.error("Create Error:", err.message);
    }
  };

  // 3️⃣ Delete event
  const testDelete = async () => {
    try {
      const result = await deleteEvent(1); // ID 1 example
      if (result.success) {
        console.log(`Event Deleted Successfully! Status: ${result.status}`);
      } else {
        console.error(
          `Failed to Delete! Status: ${result.status}, Message: ${result.message}`
        );
      }
    } catch (err) {
      console.error("Delete Error:", err.message);
    }
  };

  // Run all tests
  const runTests = async () => {
    await testFetch();
    await testCreate();
    await testDelete();
  };
  runTests();
};
