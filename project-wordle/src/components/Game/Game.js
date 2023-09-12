import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessTable from "../GuessTable/GuessTable";
import GuessForm from "../GuessForm/GuessForm";
import GuessResult from "../GuessResult/GuessResult";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Keyboard from "../Keyboard/Keyboard";
import { checkGuess } from "../../game-helpers";

// // Pick a random word on every pageload.
// const answer = sample(WORDS);
// // To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [word, setWord] = React.useState("");
  const [result, setResult] = React.useState(null);
  const [disabled, setDisabled] = React.useState(false);
  const [keyGuesses, setKeyGuesses] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  function addGuess(word) {
    const newGuesses = [...guesses, word];
    setGuesses(newGuesses);
  }

  function addKeyGuess(letter) {
    const newKeyGuess = [...keyGuesses, letter];
    keyGuesses.length < 5 && setKeyGuesses(newKeyGuess);
  }

  function check() {
    if (word === answer || keyGuesses.join("") === answer) {
      setResult(true);
      document.activeElement.blur();
      setDisabled(true);
      Array.from(document.getElementsByClassName("keyboard")).map((keyboard) => (keyboard.style.pointerEvents = "none"));
    }
    if (guesses.length + 1 === NUM_OF_GUESSES_ALLOWED && word !== answer && keyGuesses.join("") !== answer) {
      setResult(false);
      document.activeElement.blur();
      setDisabled(true);
      Array.from(document.getElementsByClassName("keyboard")).map((keyboard) => (keyboard.style.pointerEvents = "none"));
    }
  }

  function keyStatusCheck() {
    checkGuess(keyGuesses.join(""), answer).map(({ letter, status }) => {
      status === "correct" &&
        (Array.from(document.getElementsByClassName(`keyboard-cell`)).filter((cell) => cell.textContent === letter)[0].className = "keyboard-cell correct");

      status === "incorrect" &&
        Array.from(document.getElementsByClassName(`keyboard-cell`)).filter((cell) => cell.textContent === letter)[0].className !== "keyboard-cell correct" &&
        (Array.from(document.getElementsByClassName(`keyboard-cell`)).filter((cell) => cell.textContent === letter)[0].className = "keyboard-cell incorrect");

      status === "misplaced" &&
        Array.from(document.getElementsByClassName(`keyboard-cell`)).filter((cell) => cell.textContent === letter)[0].className !== "keyboard-cell correct" &&
        (Array.from(document.getElementsByClassName(`keyboard-cell`)).filter((cell) => cell.textContent === letter)[0].className = "keyboard-cell misplaced");
    });
  }

  function inputStatusCheck(word) {
    checkGuess(word, answer).map(({ letter, status }) => {
      status === "correct" &&
        (Array.from(document.getElementsByClassName(`keyboard-cell`)).filter((cell) => cell.textContent === letter)[0].className = "keyboard-cell correct");

      status === "incorrect" &&
        Array.from(document.getElementsByClassName(`keyboard-cell`)).filter((cell) => cell.textContent === letter)[0].className !== "keyboard-cell correct" &&
        (Array.from(document.getElementsByClassName(`keyboard-cell`)).filter((cell) => cell.textContent === letter)[0].className = "keyboard-cell incorrect");

      status === "misplaced" &&
        Array.from(document.getElementsByClassName(`keyboard-cell`)).filter((cell) => cell.textContent === letter)[0].className !== "keyboard-cell correct" &&
        (Array.from(document.getElementsByClassName(`keyboard-cell`)).filter((cell) => cell.textContent === letter)[0].className = "keyboard-cell misplaced");
    });
  }

  function restart() {
    setGuesses([]);
    setWord("");
    setResult(null);
    setKeyGuesses([]);
    setCounter(0);
    setDisabled(false);
    setAnswer(sample(WORDS));
    Array.from(document.getElementsByClassName(`keyboard-cell`)).map((cell) => (cell.className = "keyboard-cell"));
    Array.from(document.getElementsByClassName("keyboard")).map((keyboard) => (keyboard.style.pointerEvents = "auto"));
  }

  return (
    <>
      <GuessTable guesses={guesses} answer={answer} keyGuesses={keyGuesses} counter={counter} />
      <GuessForm
        addGuess={addGuess}
        guesses={guesses}
        answer={answer}
        word={word}
        setWord={setWord}
        check={check}
        disabled={disabled}
        counter={counter}
        setCounter={setCounter}
        inputStatusCheck={inputStatusCheck}
      />
      <GuessResult result={result} guesses={guesses} answer={answer} word={word} setWord={setWord} check={check} restart={restart} />
      <Keyboard
        addKeyGuess={addKeyGuess}
        keyGuesses={keyGuesses}
        addGuess={addGuess}
        setKeyGuesses={setKeyGuesses}
        setWord={setWord}
        counter={counter}
        setCounter={setCounter}
        check={check}
        keyStatusCheck={keyStatusCheck}
      />
    </>
  );
}

export default Game;
