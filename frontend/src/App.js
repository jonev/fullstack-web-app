import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [bookReviews, setBookReviews] = useState([]);
  const [bookReview, setBookReview] = useState();

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

  function postBookReview() {
    console.log(bookReview);
    fetch("/bookReviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookReview),
    }).then(getBookReviews());
  }

  return (
    <div className="App">
      <header className="App-header">
        <label>Get reviews</label>
        <button onClick={getBookReviews}>- Get -</button>
        <label>Book name:</label>
        <input
          type="text"
          onBlur={(e) => setBookReview({ ...bookReview, name: e.target.value })}
        ></input>
        <label>Reviewer:</label>
        <input
          type="text"
          onBlur={(e) =>
            setBookReview({ ...bookReview, reviewer: e.target.value })
          }
        ></input>
        <label>Rating:</label>
        <input
          type="number"
          onBlur={(e) =>
            setBookReview({ ...bookReview, rating: e.target.value })
          }
        ></input>
        <button onClick={postBookReview}>Post review</button>
        <>
          <label>Reviews:</label>
          {bookReviews.map((item, nr) => {
            return (
              <p>
                {item.name}, {item.reviewer}, {item.rating}
              </p>
            );
          })}
        </>
      </header>
    </div>
  );
}

export default App;
