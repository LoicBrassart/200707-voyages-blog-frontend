import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
