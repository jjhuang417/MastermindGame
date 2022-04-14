import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Componenet import
import Numpad from './Numpad.jsx';
import GameBoard from './GameBoard.jsx';
import InputHistory from './InputHistory.jsx';

const App = () => {

  // State
  const [sequence, setSequence] = useState('');
  const [guesses, SetGuess] = useState(10);
  const [playerInput, setInput] = useState([]);

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
      setInput([...playerInput, num]);
    }
  }

  // F(n) to remove a digit
  const deleteNum = () => {
    let sliced = playerInput.slice(0, playerInput.length - 1);
    setInput(sliced);
  }

  // F(n) to submit playerInput


  return (
    <div className='highestDiv'>
      <div className='titleWrap'>
        <h1 className='title'>Mastermind Game 🔍</h1>
      </div>
      <div className='guessCounterDiv'>
        <h2>{guesses} {guesses > 1 ? 'Tries' : 'Try'} Left</h2>
      </div>
      <Numpad
        playerInput={playerInput}
        setInput={setInput}
        addNum={addNum}
        deleteNum={deleteNum}
      />
      <GameBoard
        playerInput={playerInput}
        setInput={setInput}
      />
      <InputHistory />
    </div>
  )
};

export default App;