// Framework & Packages
import React from "react";

// Component import
import Guessed from "./Guessed.jsx";

const InputHistory = (props) => {
  return (
    <div className="historyDiv">
      <div className="guessLeft">
        <h2 className="guessHistory">
          {props.tries} {props.tries > 1 ? "Tries" : "Try"}
        </h2>
      </div>
      <div className="historyWrap">
        {props.history.map((eachGuess, idx) => (
          <Guessed eachGuess={eachGuess} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default InputHistory;
