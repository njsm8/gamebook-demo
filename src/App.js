import React from "react";
import "./styles.css";
import { useState } from "react";

const gameDB = {
  RPG: [
    { name: "The Witcher 3", rating: "4/5" },
    { name: "Skyrim", rating: "3.5/5" }
  ],

  Mobile: [
    {
      name: "Call of Duty Mobile",
      rating: "5/5"
    },
    {
      name: "Clash Royale",
      rating: "4.5/5"
    }
  ],
  Shooting: [
    {
      name: "Valorant",
      rating: "3.5/5"
    },
    {
      name: "Overwatch",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("RPG");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>🎮 GameBook </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite games. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(gameDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {gameDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
