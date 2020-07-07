import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { backend } from "./conf";

function App() {
  const [trips, setTrips] = useState([]);
  const [newTrip, setNewTrip] = useState({});

  useEffect(() => {
    console.log("Backend: ", backend);
    axios.get(`${backend}/trips`).then(({ data }) => {
      setTrips(
        data
          .sort((tripA, tripB) => {
            if (!tripA.price) return 1;
            if (!tripB.price) return -1;

            return tripA.price - tripB.price;
          })
          .slice(0, 10)
      );
    });
  }, []);

  const handleChange = (e) => {
    const tmp = {
      ...newTrip,
      [e.target.name]: e.target.value,
    };
    setNewTrip(tmp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${backend}/trips`, newTrip)
      .then()
      .catch((err) => {
        console.log("Erreur:", err);
      });
  };

  return (
    <div className="App">
      <ul>
        {trips.map((trip, i) => {
          return (
            <li key={i}>
              {trip.label}
              {trip.price && ` (${trip.price}€)`}
            </li>
          );
        })}
      </ul>

      <h2>New trip</h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          name="label"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="number"
          name="price"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input type="submit" value="New Trip!" />
      </form>
    </div>
  );
}

export default App;
