import React from "react";
import "../Stylesheets/mystyle.css";

function CalculateScore(props) {
  // Calculate average score
  const average = ((props.total / props.goal) * 100).toFixed(2);

  return (
    <div className="score-card">
      <h1 className="heading">Student Details:</h1>
      <p><b className="label name">Name:</b> {props.name}</p>
      <p><b className="label school">School:</b> {props.school}</p>
      <p><b className="label total">Total:</b> {props.total} Marks</p>
      <p><b className="label score">Score:</b> {average}%</p>
    </div>
  );
}

export default CalculateScore;
