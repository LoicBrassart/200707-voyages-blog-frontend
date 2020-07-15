import React from "react";
import { useDispatch } from "react-redux";

export default function LoginForm() {
  const dispatch = useDispatch();
  const login = (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGIN",
    });
  };

  return (
    <form
      onSubmit={(e) => {
        login(e);
      }}
    >
      <input type="text" />
      <input type="password" />
      <input type="submit" value="Log in!" />
    </form>
  );
}
