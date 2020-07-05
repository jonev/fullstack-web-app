import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [bookReviews, setBookReviews] = useState([]);

  function getBookReviews() {
    fetch("/bookReviews")
      .then((result) => result.json())
      .then(
        (result) => {
          setBookReviews(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getBookReviews}>Fetch reviews</button>
        <>
          {bookReviews.map((item, nr) => {
            return (
              <p>
                {item.name}, {item.rating}, {item.reviewer}
              </p>
            );
          })}
        </>
      </header>
    </div>
  );
}

export default App;
