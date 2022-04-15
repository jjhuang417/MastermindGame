// Framework & Packages
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Componenet import
import Numpad from './Numpad.jsx';
import GameBoard from './GameBoard.jsx';
import InputHistory from './InputHistory.jsx';

const App = () => {

  // State
  const [sequence, setSequence] = useState('');
  const [guess, setGuess] = useState(10);
  const [playerInput, setPlayerInput] = useState([]);
  const [history, setHistory] = useState([]);

  // Get sequence and save as state
  useEffect(() => {
    axios.get('/initialize')
    .then((res) => {
      console.log('Game Start');
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
  }

  // F(n) to remove a digit
  const deleteNum = () => {
    let sliced = playerInput.slice(0, playerInput.length - 1);
    setPlayerInput(sliced);
  }

  // F(n) to wipe out user input
  const wipeNum = () => {
    setPlayerInput([]);
  }

  // F(n) to submit playerInput
  const submitGuess = () => {
    if (playerInput.length === 4) {
      axios.get('/submit', {
        params: {
          input: playerInput
        }
      })
      .then((response) => {
        setHistory([...history,
          {
            num: playerInput,
            feedback: response.data
          }]);
        setGuess(guess - 1);
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }

  console.log('history: ', history);

  return (
    <div className='highestDiv'>
      <div className='titleWrap'>
        <h1 className='title'>Mastermind Game 🔍</h1>
      </div>
      <div className='guessCounterDiv'>
        <h2>{guess} {guess > 1 ? 'Tries' : 'Try'} Left</h2>
      </div>
      <Numpad
        addNum={addNum}
        deleteNum={deleteNum}
        wipeNum={wipeNum}
        submitGuess={submitGuess}
      />
      <GameBoard
        playerInput={playerInput}
      />
      <InputHistory
        history={history}
        playerInput={playerInput}
      />
    </div>
  )
};

export default App;