import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Guess({ guesses, answer }) {
  return (
    <>
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <p key={num} className="guess">
          {range(5).map((n) =>
            guesses[num] !== undefined ? (
              <span
                key={n}
                className={`cell ${
                  checkGuess(guesses[num].word, answer)[n].status
                }`}
              >
                {guesses[num].word[n]}
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
