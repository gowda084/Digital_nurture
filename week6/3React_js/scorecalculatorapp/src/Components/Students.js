import React from "react";

class Student extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1 style={{ color: "brown" }}>Student Details:</h1>
        <p>
          <b style={{ color: "blue" }}>Name:</b>{" "}
          <span style={{ color: "purple" }}>Steeve</span>
        </p>
        <p>
          <b style={{ color: "red" }}>School:</b>{" "}
          <span style={{ color: "purple" }}>DNV Public School</span>
        </p>
        <p>
          <b style={{ color: "brown" }}>Total:</b> 284 Marks
        </p>
        <p>
          <b style={{ color: "green" }}>Score:</b>{" "}
          <span style={{ color: "green" }}>94.67%</span>
        </p>
      </div>
    );
  }
}

export default Student;
