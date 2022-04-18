// Framework & Packages
import React, { useState, useEffect } from "react";
import axios from "axios";

// Componenet import
import Numpad from "./Numpad.jsx";
import GameBoard from "./GameBoard.jsx";
import InputHistory from "./InputHistory.jsx";

const App = () => {
  // State
  const [win, setWin] = useState(false);
  const [sequence, setSequence] = useState("");
  const [guess, setGuess] = useState(10);
  const [playerInput, setPlayerInput] = useState([]);
  const [history, setHistory] = useState([]);

  let tries = 10 - history.length;

  // Win & Lose conditions
  if (win) {
    alert("CONGRATS!!! YOU DID IT!");
  } else if (!win && guess < 1) {
    axios
      .get("/answer")
      .then((res) => {
        let answer = res.data;
        alert(`YOU DIED...Should've guess ${answer}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Get sequence and save as state
  useEffect(() => {
    axios
      .get("/initialize")
      .then((res) => {
        console.log("Game Start");
        setSequence(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // F(n) to add number
  const addNum = (num) => {
    if (playerInput.length < 4) {
      setPlayerInput([...playerInput, num]);
    }
  };

  // F(n) to submit playerInput
  const submitGuess = () => {
    if (playerInput.length === 4) {
      let feedback = guessCheck(sequence, playerInput);
      setHistory([...history, {
        num: playerInput,
        response: feedback
      }]);
      setPlayerInput([]);
    }
  };

  // F(n) to check guess
  const guessCheck = (answer, guess) => {
    let copyAnswer = answer.slice(0); // make copies for data manipulation
    let copyGuess = guess.slice(0);
    let feedback = []; // final resutls
    for (let i = 0; i < copyGuess.length; i++) {
      const guessNum = copyGuess[i]; // the current number
      const answerIndex = copyAnswer.indexOf(guessNum); // the index of the number if it exists in the answer arr

      if (guessNum === copyAnswer[i]) {
        copyAnswer[i] = -1;
        feedback.push("correct");
        continue;
      }

      if (answerIndex !== -1) {
        copyAnswer[answerIndex] = -1;
        feedback.push("partial");
        continue;
      }

      feedback.push("wrong");
    }
    feedback.sort();
    return feedback;
  };

  return (
    <div className="highestDiv">
      <div className="titleWrap">
        <h1 className="title">Mastermind</h1>
      </div>
      <Numpad
        addNum={addNum}
        playerInput={playerInput}
        onChangeInput={setPlayerInput}
        submitGuess={submitGuess}
      />
      <div className="centerHistory">
        <GameBoard playerInput={playerInput} />
      </div>
      <div className="centerHistory">
        <InputHistory
          history={history}
          playerInput={playerInput}
          tries={tries}
        />
      </div>
    </div>
  );
};

export default App;
