import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Componenet import
import Numpad from './Numpad.jsx';

const App = () => {

  // State
  const [sequence, setSequence] = useState('');
  const [guesses, SetGuess] = useState(10);

  // Get sequence and save as state
  useEffect(() => {
    axios.get('/num')
    .then((res) => {
      setSequence(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  console.log(sequence);

  return (
    <div name='highestDiv'>
      <div name='titleWrap'
        className="titleWrap">
        <h1 className='title'>Mastermind Game 🔍</h1>
      </div>
      <Numpad></Numpad>
    </div>
  )
};

export default App;