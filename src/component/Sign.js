import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sign.css";
import axios from "axios";
function SignUp() {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const handleSignUp = (e) => {
    useEffect(async () => {
      e.preventDefault();
      try {
        const res = await axios.post(
          "https://url-ing5.onrender.com/api/register",
          {
            firstName,
            lastName,
            email,
            password,
          }
        );
        console.log("User Create  Successflly!!!!");
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }, []);
  };
  return (
    <div className="header">
      <h2 className="reg">Register</h2>
      <form className="form" onClick={handleSignUp}>
        <label className="form-reg">FirstName:</label>
        <input
          className="label"
          placeholder="Enter Your Firstname"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <br></br>
        <br></br>
        <label className="form-reg">LastName:</label>
        <input
          className="label"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <br></br>
        <br></br>
        <label className="form-reg">Email:</label>
        <input
          className="emails"
          type="email"
          placeholder="Enter Your Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <br></br>
        <br></br>
        <label className="form-reg">Password: </label>
        <input
          required
          className="label"
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br></br>
        <br></br>
        <Link to="/login">
          <button className="submitr" type="submit">
            Signup
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SignUp;
