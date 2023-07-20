import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    // Perform validation and API call to signup endpoint
    if (firstName && lastName && email && password) {
      // Make API call to signup endpoint
      axios
        .post("/api/v1/users", { firstName, lastName, email, password })
        .then((response) => {
          // Handle successful signup
          console.log("Signup successful!", response.data);
        })
        .catch((error) => {
          // Handle signup error
          console.error("Signup failed:", error);
          setError("Error occurred during signup");
        });
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
