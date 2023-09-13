function GuessForm({ addGuess, word, setWord, result, counter, setCounter }) {
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        addGuess(word);
        setWord("");
        setCounter(counter + 1);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={word}
        pattern="[A-Z]{5}"
        maxLength={5}
        disabled={result !== null}
        required
        onChange={(event) => setWord(event.target.value.toUpperCase())}
        title="need 5 letter"
      />
    </form>
  );
}

export default GuessForm;
