// Framework & Packages
import React from 'react';

// playerInput is the big numebrs at the top that players put in
// when submit button is hit, it should put that input into guess history

const Guessed = (props) => {

  let [feedback1, feedback2, feedback3, feedback4] = props.eachGuess.feedback;

  console.log(props.eachGuess);

  const rightSpot = <p>🟢</p>
  const rightNum = <p>🟡</p>
  const incorrect = <p>⚫</p>

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
        <p>{props.eachGuess.num}</p>
        {dotRender(feedback1)}
        {dotRender(feedback2)}
        {dotRender(feedback3)}
        {dotRender(feedback4)}
      </div>
    </div>
  )
}

export default Guessed;