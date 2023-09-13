const letters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "\u23CE", "Z", "X", "C", "V", "B", "N", "M", "\u232b"];

function Keyboard({ addKeyGuess, keyGuesses, addGuess, setKeyGuesses, counter, setCounter }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        keyGuesses.length === 5
          ? (addGuess(keyGuesses.join("")), setKeyGuesses([]), setCounter(counter + 1))
          : document.getElementsByClassName("guess")[counter].classList.add("box");
      }}
    >
      <div className="keyboard">
        {letters.map((letter, index) =>
          index !== 19 && index !== 27 ? (
            <span
              key={index}
              className="keyboard-cell"
              onClick={() => {
                addKeyGuess(letter);
                document.getElementsByClassName("guess")[counter].classList.remove("box");
              }}
            >
              {letter}
            </span>
          ) : index !== 27 ? (
            <button type="submit" key={index} className="keyboard-cell">
              {letter}
            </button>
          ) : (
            <button
              type="button"
              key={index}
              className="keyboard-cell"
              onClick={() => {
                keyGuesses.pop();
                setKeyGuesses([...keyGuesses]);
                document.getElementsByClassName("guess")[counter].classList.remove("box");
              }}
            >
              {letter}
            </button>
          )
        )}
      </div>
    </form>
  );
}

export default Keyboard;
