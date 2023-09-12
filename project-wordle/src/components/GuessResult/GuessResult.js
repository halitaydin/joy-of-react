function GuessResult({ result, guesses, answer, restart }) {
  return (
    <>
      {result && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in <strong>{guesses.length} guesses</strong>.
          </p>
          <p>
            <button className="restart" onClick={restart}>
              Restart!
            </button>
          </p>
        </div>
      )}
      {!result && result !== null && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <p>
            <button className="restart" onClick={restart}>
              Restart!
            </button>
          </p>
        </div>
      )}
    </>
  );
}

export default GuessResult;
