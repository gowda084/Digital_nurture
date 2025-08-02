import React from "react";

function GuestGreeting() {
  return (
    <div>
      <h2>Welcome Guest! Please login to book tickets.</h2>
      <p>🎟️ You can still browse available flights:</p>
      <ul>
        <li>✈️ Flight A - 10:00 AM</li>
        <li>✈️ Flight B - 12:00 PM</li>
        <li>✈️ Flight C - 5:30 PM</li>
      </ul>
    </div>
  );
}

export default GuestGreeting;
