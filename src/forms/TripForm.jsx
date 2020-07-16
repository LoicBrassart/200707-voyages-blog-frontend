import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { backend } from "../conf";

export default function TripForm() {
  const [newTrip, setNewTrip] = useState({});
  const authToken = useSelector((state) => state.currentUser.token);

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
      .post(`${backend}/trips`, newTrip, {
        headers: {
          Authorization: "Bearer " + (authToken || null),
        },
      })
      .then(() => {
        toast.info("🦄 Yay!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log("Erreur:", err);
        toast.error("🦄 Nay!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
