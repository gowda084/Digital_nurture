import React, { useState } from "react";
import ListofPlayers, { Scorebelow70 } from "./components/ListofPlayers";
import {
  OddPlayers,
  EvenPlayers,
  ListofIndianPlayers,
} from "./components/IndianPlayers";

function App() {
  const [flag, setFlag] = useState(true); // useState for dynamic toggle

  const players = [
    { name: "Jack", score: 50 },
    { name: "Michael", score: 70 },
    { name: "John", score: 40 },
    { name: "Ann", score: 61 },
    { name: "Elisabeth", score: 61 },
    { name: "Sachin", score: 95 },
    { name: "Dhoni", score: 100 },
    { name: "Virat", score: 84 },
    { name: "Jadeja", score: 64 },
    { name: "Raina", score: 75 },
    { name: "Rohit", score: 80 },
  ];

  const IndianTeam = ["Sachin1", "Dhoni2", "Virat3", "Rohit4", "Yuvaraj5", "Raina6"];

  const T20players = ["First Player", "Second Player", "Third Player"];
  const RanjiTrophyPlayers = ["Fourth Player", "Fifth Player", "Sixth Player"];

  const IndianPlayers = [...T20players, ...RanjiTrophyPlayers]; // Merge using ES6 spread

  return (
    <div>
      {/* 🔘 Toggle Button */}
      <button
        onClick={() => setFlag(!flag)}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Switch to {flag ? "False Page" : "True Page"}
      </button>

      <p>Flag is: {flag ? "true ✅" : "false ❌"}</p>
      <hr />

      {/* Conditional Rendering */}
      {flag ? (
        <>
          <h1>List of Players</h1>
          <ListofPlayers players={players} />
          <hr />
          <h1>List of Players having Scores Less than 70</h1>
          <Scorebelow70 players={players} />
        </>
      ) : (
        <>
          <div>
            <h1>Indian Team</h1>
            <h1>Odd Players</h1>
            {OddPlayers({ IndianTeam })}
            <hr />
            <h1>Even Players</h1>
            {EvenPlayers({ IndianTeam })}
          </div>
          <hr />
          <div>
            <h1>List of Indian Players Merged:</h1>
            <ListofIndianPlayers IndianPlayers={IndianPlayers} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
