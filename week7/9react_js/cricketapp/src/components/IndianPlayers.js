import React from "react";

export const OddPlayers = (team) => {
  const { IndianTeam } = team; // Destructuring
  return (
    <ul>
      {IndianTeam.filter((_, index) => index % 2 === 0).map((player, i) => (
        <li key={i}>
          {i + 1} : {player}
        </li>
      ))}
    </ul>
  );
};

export const EvenPlayers = (team) => {
  const { IndianTeam } = team;
  return (
    <ul>
      {IndianTeam.filter((_, index) => index % 2 !== 0).map((player, i) => (
        <li key={i}>
          {i + 2} : {player}
        </li>
      ))}
    </ul>
  );
};

export const ListofIndianPlayers = ({ IndianPlayers }) => {
  return (
    <ul>
      {IndianPlayers.map((player, index) => (
        <li key={index}>Mr. {player}</li>
      ))}
    </ul>
  );
};
