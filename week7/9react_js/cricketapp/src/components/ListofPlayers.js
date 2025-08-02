import React from "react";

const ListofPlayers = ({ players }) => {
  return (
    <ul>
      {players.map((p, index) => (
        <li key={index}>
          Mr. {p.name} {p.score}
        </li>
      ))}
    </ul>
  );
};

export const Scorebelow70 = ({ players }) => {
  const filtered = players.filter((p) => p.score < 70); // Using arrow function
  return (
    <ul>
      {filtered.map((p, index) => (
        <li key={index}>
          Mr. {p.name} {p.score}
        </li>
      ))}
    </ul>
  );
};

export default ListofPlayers;
