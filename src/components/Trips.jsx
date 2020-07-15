import React, { useState, useEffect } from "react";
import axios from "axios";
import { backend } from "../conf";

export default function Trips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
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

  return (
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
  );
}
