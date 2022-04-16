// Framework & Packages
import React from 'react';

const Guessed = (props) => {
  // Feedback from the server
  let [feedback1, feedback2, feedback3, feedback4] = props.eachGuess.feedback;

  // Component for feedbacks
  const rightSpot = <h4 className='dots'>🟢</h4>
  const rightNum = <h4 className='dots'>🟡</h4>
  const incorrect = <h4 className='dots'>⚫</h4>

  // F(n) for dot render
  const dotRender = (feedback) => {
    switch(feedback){
      case 'correct':
        return rightSpot;
      case 'partial':
        return rightNum;
        case 'wrong':
          return incorrect;
    }
  }

  return (
    <div className='feedbackDiv'>
      <div className='inputDiv'>
        <p className='guessNum'>{props.eachGuess.num}</p>
        <div className='col-div'>
          <div className='row-div'>
            {dotRender(feedback1)}
            {dotRender(feedback2)}
          </div>
          <div className='row-div'>
            {dotRender(feedback3)}
            {dotRender(feedback4)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guessed;