import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Componenet import
import Numpad from './Numpad.jsx';
import GameBoard from './GameBoard.jsx';

const App = () => {

  // State
  const [sequence, setSequence] = useState('');
  const [guesses, SetGuess] = useState(10);
  const [playerInput, setInput] = useState([1,2]);

  // Get sequence and save as state
  useEffect(() => {
    axios.get('/num')
    .then((res) => {
      setSequence(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [playerInput]);

  // Function to add number
  const addNum = (num) => {
    playerInput.push(num)
    setInput(playerInput);
  }

  console.log('sequence: ', sequence);
  console.log('input: ', playerInput);

  return (
    <div className='highestDiv'>
      <div className='titleWrap'>
        <h1 className='title'>Mastermind Game 🔍</h1>
      </div>
      <div className='guessCounterDiv'>
        <h1>{guesses} Guesses Left</h1>
      </div>
      <Numpad
        playerInput={playerInput}
        setInput={setInput}
        addNum={addNum}
      />
      <GameBoard
        playerInput={playerInput}
        setInput={setInput}
      />
    </div>
  )
};

export default App;