import React from 'react';

const GameBoard = (props) => {

  return (
    <div className='gameBoard'>
      {props.playerInput.map(int => {
        return <h1 className='playerInput'>{int}</h1>
      })}
    </div>
  );
}

export default GameBoard;