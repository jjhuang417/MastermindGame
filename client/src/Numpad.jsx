import React from 'react';

const Numpad = (props) => {

  const handleAdd = (event) => {
    event.preventDefault();
    props.addNum(event.target.value);
  }

  return (
    <div name='numPadWrap' className='numPadWrap'>
      <button onClick={handleAdd} type='button' value='0'>0</button>
      <button type='button' value='1'>1</button>
      <button type='button' value='2'>2</button>
      <button type='button' value='3'>3</button>
      <button type='button' value='4'>4</button>
      <button type='button' value='5'>5</button>
      <button type='button' value='6'>6</button>
      <button type='button' value='7'>7</button>
      <button>Delete</button>
      <button>Enter</button>
      <br></br>
    </div>
  )
};

export default Numpad;