import React from 'react';

const Numpad = (props) => {

  // Adding numbers
  const handleAdd = (event) => {
    event.preventDefault();
    props.addNum(event.target.value);
  }

  // Delete numbers
  const handleDelete = (event) => {
    event.preventDefault();
    props.deleteNum();
  }

  // Wipe player input
  const handleWipe = (event) => {
    event.preventDefault();
    props.wipeNum();
  }

  // Submit player guess
  const handleSubmit = (event) => {
    event.preventDefault();
    props.submitGuess();
  }

  return (
    <div name='numPadWrap' className='numPadWrap'>
      <div className='functionButton'>
        <button onClick={handleAdd} type='button' value='0'>0</button>
        <button  onClick={handleAdd}  type='button' value='1'>1</button>
        <button onClick={handleAdd}  type='button' value='2'>2</button>
        <button onClick={handleAdd}  type='button' value='3'>3</button>
        <button onClick={handleAdd}  type='button' value='4'>4</button>
        <button onClick={handleAdd}  type='button' value='5'>5</button>
        <button onClick={handleAdd}  type='button' value='6'>6</button>
        <button onClick={handleAdd}  type='button' value='7'>7</button>
      </div>
      <div className='functionButton'>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleWipe}>Reset Input</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
};

export default Numpad;