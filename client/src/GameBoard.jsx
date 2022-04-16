import React from 'react';

const GameBoard = (props) => {
  let [input1, input2, input3, input4] = props.playerInput;

  return (
    <div className='gameBoard'>
      <div className='underline'>
        {input1 ? <h1>{input1}</h1> : null}
      </div>
      <div className='underline'>
        {input2 ? <h1>{input2}</h1> : null}
      </div>
      <div className='underline'>
        {input3 ? <h1>{input3}</h1> : null}
      </div>
      <div className='underline'>
        {input4 ? <h1>{input4}</h1> : null}
      </div>
    </div>
  );
}

export default GameBoard;
