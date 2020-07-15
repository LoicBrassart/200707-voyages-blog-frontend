import React, { useState } from "react";
import axios from "axios";
import { backend } from "../conf";

export default function TripForm() {
  const [newTrip, setNewTrip] = useState({});

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
    <>
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
    </>
  );
}
