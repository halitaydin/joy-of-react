import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Guess({ guesses, answer, keyGuesses, counter }) {
  return (
    <>
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <p key={num} className="guess">
          {range(5).map((n) =>
            guesses[num] ? (
              <span key={n} className={`cell ${checkGuess(guesses[num], answer)[n].status}`}>
                {guesses[num][n]}
              </span>
            ) : keyGuesses[n] ? (
              <span key={n} className={`cell`}>
                {keyGuesses[n][num - counter]}
              </span>
            ) : (
              <span key={n} className="cell"></span>
            )
          )}
        </p>
      ))}
    </>
  );
}

export default Guess;
