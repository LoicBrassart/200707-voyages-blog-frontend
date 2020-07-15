import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Trips from "./components/Trips";
import TripForm from "./forms/TripForm";
import LoginForm from "./forms/LoginForm";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.currentUser.loggedIn);

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <>
      <Trips />
      {isLoggedIn ? (
        <>
          <TripForm />
          <button onClick={logout}>Log out</button>
        </>
      ) : (
        <>
          <LoginForm />
        </>
      )}
    </>
  );
}

export default App;
