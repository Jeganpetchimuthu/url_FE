import React, { useState } from "react";
import axios from "axios";
import "./Home.css";

function Home() {
  const [shortener, setShortener] = useState({ url: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://url-ing5.onrender.com/url", {
        shortener,
      });
      console.log(response.shortener);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1 className="h">URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="m1"
          type="url"
          name="url"
          placeholder="Enter a long URL"
          value={shortener.url}
          onChange={(e) => setShortener({ url: e.target.value })}
        />
        <button className="m2" type="submit">
          Shorten URL
        </button>
      </form>
    </div>
  );
}

export default Home;
