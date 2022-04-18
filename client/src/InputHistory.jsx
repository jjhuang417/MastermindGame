// Framework & Packages
import React from 'react';

// Componenet import
import Guessed from './Guessed.jsx';

const InputHistory = (props) => {

  return (
    <div className='historyDiv'>
      <div className='guessLeft'>
        <h2 className='guessHistory'>{props.tries} {props.tries > 1 ? 'Tries' : 'Try'} Left</h2>
      </div>
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