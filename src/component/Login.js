import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://url-ing5.onrender.com/api/auth", {
        email,
        password,
      });
      const token = res.data.token;
      localStorage.setItem("token", token);

      console.log("User Create  Successflly!!!!");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-containerq">
      <h2 className="h2">Login User</h2>
      <form onClick={handleLogin}>
        <label>
          Email:
          <input
            className="email"
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Password:
          <input
            className="emaill"
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br></br>
        <br></br>
        <Link to="/home">
          <button className="login" type="submit">
            login
          </button>
        </Link>
      </form>
      <Link to="/resetpassword">
        <button className="login">Reset Password</button>
      </Link>
    </div>
  );
}

export default Login;
