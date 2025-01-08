import React from "react";
import Card from "./Card";

const Form = () => {
  return (
    <Card>
      <form id="info-form">
        <input
          type="text"
          id="full_name"
          placeholder="Full Name"
        />
        <input type="email" id="email" placeholder="Email" />
        <input
          type="password"
          id="password"
          placeholder="Password"
        />
        <input
          type="password"
          id="password_confirmation"
          placeholder="Confirm Password"
        />
        <button type="submit" id="submit">
          Submit
        </button>
      </form>
    </Card>
  );
};

export default Form;
