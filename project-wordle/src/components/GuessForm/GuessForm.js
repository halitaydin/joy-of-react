import React from "react";

function GuessForm({ addGuess, word, setWord, check, result }) {
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        addGuess(word);
        setWord("");
        check();
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={word}
        pattern="[A-Z]{5}"
        maxLength={5}
        disabled={result}
        required
        onChange={(event) => setWord(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessForm;
