import React, { useEffect, useState } from "react";
import "./App.css";
import Trips from "./components/Trips";
import TripForm from "./forms/TripForm";
import LoginForm from "./forms/LoginForm";

function App() {
  const isAuth = () => {
    return false;
  };

  return (
    <>
      <Trips />
      {isAuth() ? <TripForm /> : <LoginForm />}
    </>
  );
}

export default App;
