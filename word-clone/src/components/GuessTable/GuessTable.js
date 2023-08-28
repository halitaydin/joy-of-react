import React from "react";
import Guess from "../Guess/Guess";

function GuessTable({ guesses, answer }) {
  return (
    <div className="guess-results">
      <Guess guesses={guesses} answer={answer} />
    </div>
  );
}

export default GuessTable;
