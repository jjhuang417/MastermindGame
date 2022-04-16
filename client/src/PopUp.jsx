import React from 'react';

const PopUp = (props) => {

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <h1 className='texts'>{props.win ? 'CONGRATS! YOU DID IT!!!' : 'YOU DIED...'}</h1>
      </div>
    </div>
  )
}

export default PopUp;