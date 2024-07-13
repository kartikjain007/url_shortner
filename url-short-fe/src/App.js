// src/App.js

import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/short`,
        {
          long_url: longUrl,
        }
      );
      setShortUrl(response.data.short_url);
      setError("");
    } catch (err) {
      setError("Error creating short URL");
      setShortUrl("");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>URL Shortener</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter long URL"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
          <button type="submit">Shorten</button>
        </form>
        {shortUrl && (
          <div>
            <h2>Short URL:</h2>
            <a
              href={`${process.env.REACT_APP_BASE_URL}/${shortUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {`${process.env.REACT_APP_BASE_URL}/${shortUrl}`}
            </a>
          </div>
        )}
        {error && <div className="error">{error}</div>}
      </header>
    </div>
  );
}

export default App;
