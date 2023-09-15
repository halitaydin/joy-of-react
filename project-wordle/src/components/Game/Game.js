import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessTable from "../GuessTable/GuessTable";
import GuessForm from "../GuessForm/GuessForm";
import GuessResult from "../GuessResult/GuessResult";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Keyboard from "../Keyboard/Keyboard";
import { checkGuess } from "../../game-helpers";

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [word, setWord] = React.useState("");
  const [result, setResult] = React.useState(null);
  const [keyGuesses, setKeyGuesses] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  function keyboardStatus(letter, status) {
    const keyboard = Array.from(document.getElementsByClassName(`keyboard-cell`));

    status === "correct" && (keyboard.filter((cell) => cell.textContent === letter)[0].className = "keyboard-cell correct");

    status === "incorrect" &&
      keyboard.filter((cell) => cell.textContent === letter)[0].className !== "keyboard-cell correct" &&
      keyboard.filter((cell) => cell.textContent === letter)[0].className !== "keyboard-cell misplaced" &&
      (keyboard.filter((cell) => cell.textContent === letter)[0].className = "keyboard-cell incorrect");

    status === "misplaced" &&
      keyboard.filter((cell) => cell.textContent === letter)[0].className !== "keyboard-cell correct" &&
      keyboard.filter((cell) => cell.textContent === letter)[0].className !== "keyboard-cell incorrect" &&
      (keyboard.filter((cell) => cell.textContent === letter)[0].className = "keyboard-cell misplaced");
  }

  function addGuess(word) {
    const newGuesses = [...guesses, word];
    setGuesses(newGuesses);

    if (word === answer || keyGuesses.join("") === answer) {
      setResult(true);
      document.activeElement.blur();
      Array.from(document.getElementsByClassName("keyboard")).map((keyboard) => (keyboard.style.pointerEvents = "none"));
    } else if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setResult(false);
      document.activeElement.blur();
      Array.from(document.getElementsByClassName("keyboard")).map((keyboard) => (keyboard.style.pointerEvents = "none"));
    }

    checkGuess(word, answer).map(({ letter, status }) => {
      keyboardStatus(letter, status);
    });
  }

  function addKeyGuess(letter) {
    const newKeyGuess = [...keyGuesses, letter];

    if (newKeyGuess.length <= 5) {
      setKeyGuesses(newKeyGuess);
    } else if (newKeyGuess.length === 5) {
      document.querySelector('button[type="submit"]').addEventListener("click", () => {
        checkGuess(newKeyGuess.join(""), answer).map(({ letter, status }) => {
          keyboardStatus(letter, status);
        });
      });
      return;
    }
  }

  function restart() {
    setGuesses([]);
    setWord("");
    setResult(null);
    setKeyGuesses([]);
    setCounter(0);
    setResult(null);
    setAnswer(sample(WORDS));
    Array.from(document.getElementsByClassName(`keyboard-cell`)).map((cell) => (cell.className = "keyboard-cell"));
    Array.from(document.getElementsByClassName("keyboard")).map((keyboard) => (keyboard.style.pointerEvents = "auto"));
  }

  return (
    <>
      <GuessTable guesses={guesses} answer={answer} keyGuesses={keyGuesses} counter={counter} />
      <GuessForm addGuess={addGuess} guesses={guesses} answer={answer} word={word} setWord={setWord} result={result} counter={counter} setCounter={setCounter} />
      <GuessResult result={result} guesses={guesses} answer={answer} word={word} setWord={setWord} restart={restart} />
      <Keyboard
        addKeyGuess={addKeyGuess}
        keyGuesses={keyGuesses}
        addGuess={addGuess}
        setKeyGuesses={setKeyGuesses}
        setWord={setWord}
        counter={counter}
        setCounter={setCounter}
      />
    </>
  );
}

export default Game;
