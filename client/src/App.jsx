// Framework & Packages
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Componenet import
import Numpad from './Numpad.jsx';
import GameBoard from './GameBoard.jsx';
import InputHistory from './InputHistory.jsx';

const App = () => {

  // State
  const [win, setWin] = useState(false);
  const [sequence, setSequence] = useState('');
  const [guess, setGuess] = useState(10);
  const [playerInput, setPlayerInput] = useState([]);
  const [history, setHistory] = useState([]);

  // Win & Lose conditions
  if (win) {
    alert('CONGRATS!!! YOU DID IT!');
  } else if ((!win && guess < 1)) {
    axios.get('/answer')
    .then ((res) => {
     let answer = res.data;
      alert(`YOU DIED...Should've guess ${answer}`);
    })
    .catch ((err) => {
      console.log(err);
    })
  }

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
          }
        ]);
        setGuess(guess - 1);
        let winNum = 0;
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i] === 'correct') {
            winNum += 1;
          }
          if (winNum === 4) {
            setWin(true);
          };
        }
        setPlayerInput([]);
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }

  return (
    <div className='highestDiv'>
      <div className='titleWrap'>
        <h1 className='title'>Mastermind Game 🔍</h1>
      </div>
      <Numpad
        addNum={addNum}
        deleteNum={deleteNum}
        wipeNum={wipeNum}
        submitGuess={submitGuess}
        win={win}
        setWin={setWin}
      />
      <div className='centerHistory'>
        <GameBoard
          playerInput={playerInput}
        />
      </div>
      <div className='centerHistory'>
        <InputHistory
          history={history}
          playerInput={playerInput}
          guess={guess}
        />
      </div>

    </div>
  )
};

export default App;