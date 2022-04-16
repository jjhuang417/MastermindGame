// Framework & Packages
import React from 'react';

// Componenet import
import Guessed from './Guessed.jsx';

const InputHistory = (props) => {

  return (
    <div className='historyDiv'>
        <h2 className='guessHistory'>{props.guess} {props.guess > 1 ? 'Tries' : 'Try'} Left</h2>
      <div className='historyWrap'>
        {
          props.history.map((eachGuess, idx) =>
            <Guessed
              key={idx}
              eachGuess={eachGuess}
            />)
        }
      </div>
    </div>
  )
};

export default InputHistory;