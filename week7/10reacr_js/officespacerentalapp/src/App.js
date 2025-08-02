import React from "react";
import "./App.css";

function App() {
  // List of office spaces
  const officeSpaces = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      Image: "https://img.freepik.com/free-photo/modern-office-building_1127-3151.jpg",
    },
    {
      Name: "WeWork",
      Rent: 70000,
      Address: "Bangalore",
      Image: "https://img.freepik.com/free-photo/office-modern-space_1127-2270.jpg",
    },
    {
      Name: "Regus",
      Rent: 55000,
      Address: "Hyderabad",
      Image: "https://img.freepik.com/free-photo/office-space_1127-2327.jpg",
    },
  ];

  return (
    <div style={{ margin: "20px" }}>
      <h1>
        <b>Office Space , at Affordable Range</b>
      </h1>

      {officeSpaces.map((item, index) => {
        const rentColor = item.Rent <= 60000 ? "red" : "green";

        return (
          <div key={index} style={{ marginBottom: "40px", textAlign: "left" }}>
            <img
              src={item.Image}
              width="25%"
              height="25%"
              alt="Office Space"
              style={{ display: "block", marginBottom: "10px" }}
            />
            <h2>Name: {item.Name}</h2>
            <h3 style={{ color: rentColor }}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
