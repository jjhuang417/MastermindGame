import React from 'react';

const GameBoard = (props) => {

  return (
    <div className='gameBoard'>
      <div className='inputTitle'>
      </div>
      {props.playerInput.map((int, idx)  => (
        <h1
          className='playerInput'
          key={idx}>{int}
        </h1>
      ))}
    </div>
  );
}

export default GameBoard;