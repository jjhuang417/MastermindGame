// Framework & Packages
import React from 'react';

// Componenet import
import Guessed from './Guessed.jsx';

const InputHistory = (props) => {

  return (
    <div className='historyDiv'>
      <h2 className='sectionTitle'>Guess History</h2>
      <div className='numPadWrap'>
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