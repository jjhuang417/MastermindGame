import React, { useState, useEffect } from 'react';
const axios = require('axios');

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
      <div name='titleWrap'>
        <h1>Mastermind Game 🔍</h1>
      </div>
    </div>
  )
};

export default App;