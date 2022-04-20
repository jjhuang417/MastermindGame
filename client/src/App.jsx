// Framework & Packages
import React, { useState, useEffect } from "react";
import axios from "axios";

// Component import
import Numpad from "./Numpad.jsx";
import InputHistory from "./InputHistory.jsx";
import Modal from "./Modal.jsx";

const App = () => {
  // State
  const [sequence, setSequence] = useState([]);
  const [guess, setGuess] = useState(10);
  const [playerInput, setPlayerInput] = useState([]);
  const [history, setHistory] = useState([]);
  const [modal, setModal] = useState(false);

  let tries = 10 - history.length;

  // Get sequence and save as state
  useEffect(() => {
    axios
      .get("/initialize")
      .then((res) => {
        setSequence(res.data);
        getFocus();
        // localStorage.clear();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
console.log(sequence);
  // F(n) to add number
  const addNum = (num) => {
    if (playerInput.length < 4) {
      setPlayerInput([...playerInput, num]);
    }
  };

  // Does guess equal to answer
  const isItCorrect = playerInput?.join("") === sequence?.join("");

  // F(n) to submit playerInput
  const submitGuess = () => {
    if (playerInput.length === 4 && tries > 0) {
      let feedback = guessCheck(sequence, playerInput);
      setHistory([
        ...history,
        {
          num: playerInput,
          response: feedback,
        },
      ]);

      if (isItCorrect || (tries === 1 && !isItCorrect)) {
        setModal(true);
        trackWins(isItCorrect);
      } else {
        setPlayerInput([]);
      }
    }
  };

  // F(n) to check guess
  const guessCheck = (answer, guess) => {
    let copyGuess = guess.slice(0);
    let feedback = []; // final resutls

    for (let i = 0; i < copyGuess.length; i++) {
      const answerNum = answer[i]; // the current number
      const guessIndex = copyGuess.indexOf(answerNum); // the index of the number if it exists in the answer arr

      // Checking for the right spot and right number
      if (answerNum === copyGuess[i]) {
        copyGuess[i] = -1;
        feedback.push("correct");
        continue;
      }

      // Checking for partial matches
      if (guessIndex !== -1) {
        copyGuess[guessIndex] = -1;
        feedback.push("partial");
        continue;
      }

      feedback.push("wrong");
    }
    feedback.sort();
    return feedback;
  };

  // Close the modal
  const closeModal = () => {
    setModal(false);
  };

  // Auto focus the input field on page load
  const getFocus = () => {
    document.getElementById("playerInputField").focus();
  };

  // F(n) to track numbers of wins & total games played via local storage
  const trackWins = (isItCorrect) => {
    if (isItCorrect && !storedTotal) {
      localStorage.wins = 1;
      localStorage.total = 1;
    } else if (isItCorrect && localStorage.total) {
      localStorage.wins = Number(localStorage.wins) + 1;
      localStorage.total = Number(localStorage.total) + 1;
    } else if (isItCorrect && !localStorage.total) {
      localStorage.total = 1;
    } else {
      localStorage.total = Number(localStorage.total) + 1;
    }
  };

  return (
    <div className="highestDiv">
      <div className="titleWrap">
        <h1>Mastermind</h1>
      </div>
      <div className="scoreWrap">
        <h2 className="scoreText">
          Wins: {localStorage.wins ? localStorage.wins : 0}/{localStorage.total ? localStorage.total : 0}
        </h2>
      </div>
      <Numpad
        addNum={addNum}
        playerInput={playerInput}
        onChangeInput={setPlayerInput}
        submitGuess={submitGuess}
      />
      <div className="centerHistory">
        <InputHistory
          history={history}
          playerInput={playerInput}
          tries={tries}
        />
      </div>
      {modal ? (
        <Modal
          sequence={sequence}
          playerInput={playerInput}
          closeModal={closeModal}
          tries={tries}
        />
      ) : null}
    </div>
  );
};

export default App;
