import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessTable from "../GuessTable/GuessTable";
import GuessForm from "../GuessForm/GuessForm";
import GuessResult from "../GuessResult/GuessResult";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [word, setWord] = React.useState("");
  const [result, setResult] = React.useState(null);

  function addGuess(word) {
    const newGuess = {
      word,
      id: crypto.randomUUID(),
    };
    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);
  }

  function check() {
    if (word === answer) {
      setResult(true);
      document.activeElement.blur();
    }
    if (guesses.length + 1 === NUM_OF_GUESSES_ALLOWED && word !== answer) {
      setResult(false);
      document.activeElement.blur();
    }
  }

  return (
    <>
      <GuessTable guesses={guesses} answer={answer} />
      <GuessForm
        addGuess={addGuess}
        guesses={guesses}
        answer={answer}
        word={word}
        setWord={setWord}
        check={check}
        result={result}
      />
      <GuessResult
        result={result}
        guesses={guesses}
        answer={answer}
        word={word}
        setWord={setWord}
        check={check}
      />
    </>
  );
}

export default Game;
