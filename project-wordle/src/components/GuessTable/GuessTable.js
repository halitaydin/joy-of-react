import Guess from "../Guess/Guess";

function GuessTable({ guesses, answer, addKeyGuess, keyGuesses, counter }) {
  return (
    <div className="guess-results">
      <Guess guesses={guesses} answer={answer} addKeyGuess={addKeyGuess} keyGuesses={keyGuesses} counter={counter} />
    </div>
  );
}

export default GuessTable;
