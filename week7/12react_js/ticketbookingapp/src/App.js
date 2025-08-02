import React, { useState } from 'react';
import './App.css';

function UserGreeting() {
  return <h1>Welcome back</h1>;
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function FlightDetails() {
  return (
    <div>
      <h2>Flight Details</h2>
      <ul>
        <li>Flight: AI202, Delhi to Mumbai, 10:00 AM</li>
        <li>Flight: AI203, Mumbai to Bangalore, 2:00 PM</li>
      </ul>
    </div>
  );
}

function BookTicket() {
  return (
    <div>
      <h2>Book Your Ticket</h2>
      <p>Select your flight and proceed to book.</p>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  let button = isLoggedIn ? (
    <LogoutButton onClick={handleLogoutClick} />
  ) : (
    <LoginButton onClick={handleLoginClick} />
  );

  return (
    <div className="App">
      <Greeting isLoggedIn={isLoggedIn} />
      {button}

      <div style={{ marginTop: '40px' }}>
        {isLoggedIn ? <BookTicket /> : <FlightDetails />}
      </div>
    </div>
  );
}

export default App;
