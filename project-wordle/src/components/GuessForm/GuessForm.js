function GuessForm({ addGuess, word, setWord, check, disabled, counter, setCounter, inputStatusCheck }) {
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        addGuess(word);
        setWord("");
        setCounter(counter + 1);
        inputStatusCheck(word);
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
        disabled={disabled}
        required
        onChange={(event) => setWord(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessForm;
