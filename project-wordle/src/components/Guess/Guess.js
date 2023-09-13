import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Guess({ guesses, answer, keyGuesses, counter }) {
  return (
    <>
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <p key={num} className="guess">
          {range(5).map((n) => (
            <span key={n} className={`cell ${guesses[num] && checkGuess(guesses[num], answer)[n].status}`}>
              {guesses[num] ? guesses[num][n] : undefined}
              {keyGuesses[n] ? keyGuesses[n][num - counter] : undefined}
            </span>
          ))}
        </p>
      ))}
    </>
  );
}

export default Guess;
