import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [formData, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5050/auth/signin", formData)
      .then(({ data }) => {
        dispatch({
          type: "LOGIN",
          payload: {
            token: data.token,
            mail: data.user.mail,
            id: data.user.id,
          },
        });
      });
  };

  return (
    <form
      onSubmit={(e) => {
        login(e);
      }}
    >
      <input
        type="text"
        name="mail"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <input
        type="password"
        name="pass"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <input type="submit" value="Log in!" />
    </form>
  );
}
