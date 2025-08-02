import React from "react";

function UserGreeting() {
  return (
    <div>
      <h2>Welcome Back! You can book tickets now.</h2>
      <p>🎟️ Available Flights:</p>
      <ul>
        <li>✈️ Flight A - 10:00 AM</li>
        <li>✈️ Flight B - 12:00 PM</li>
        <li>✈️ Flight C - 5:30 PM</li>
      </ul>
      <button>Book Ticket</button>
    </div>
  );
}

export default UserGreeting;
