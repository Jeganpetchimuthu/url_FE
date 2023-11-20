import React, { useState } from "react";
import axios from "axios";
import "./Resetpassword.css";
import { Link } from "react-router-dom";

function Resetpassword() {
  const [email, setEmail] = useState(" ");
  const handleChange = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://url-ing5.onrender.com/api/reset-password",
        {
          email,
        }
      );
      const token = res.data.token;
      console.log("Mail Send Successflly!!!!");
      console.log(res, token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="head">
      <h2 className="h2">Reset Password</h2>
      <form onClick={handleChange}>
        <label>
          Email:
          <input
            className="pass"
            placeholder="Enter Your Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br></br>
        <br></br>
        <Link to="/resetnewpassword">
          <button className="reset" type="submit">
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Resetpassword;
