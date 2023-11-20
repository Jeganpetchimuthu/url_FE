import React, { useState } from "react";
import "./New.css";
import axios from "axios";
function Resetnewpassword() {
  const [token, setToken] = useState("");
  const handleSubmited = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://url-ing5.onrender.com/api/reset-password"
      );
      const token = res.body.token;
      console.log(res, token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="main-otp">
      <form onClick={handleSubmited} className="otp">
        <label className="heading">
          Enter Your Password :
          <input
            placeholder="Enter your OTP"
            type="text"
            className="lab-in"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
        </label>
        <br></br>
        <br></br>
        <br></br>
        <button className="en">Submit</button>
      </form>
    </div>
  );
}

export default Resetnewpassword;
