import React from 'react';

const Numpad = (props) => {

  const handleAdd = (event) => {
    event.preventDefault();
    props.addNum(event.target.value);
  }

  const handleDelete = () => {
    event.preventDefault();
    props.deleteNum();
  }

  return (
    <div name='numPadWrap' className='numPadWrap'>
      <button onClick={handleAdd} type='button' value='0'>0</button>
      <button  onClick={handleAdd}  type='button' value='1'>1</button>
      <button onClick={handleAdd}  type='button' value='2'>2</button>
      <button onClick={handleAdd}  type='button' value='3'>3</button>
      <button onClick={handleAdd}  type='button' value='4'>4</button>
      <button onClick={handleAdd}  type='button' value='5'>5</button>
      <button onClick={handleAdd}  type='button' value='6'>6</button>
      <button onClick={handleAdd}  type='button' value='7'>7</button>
      <button onClick={handleDelete}>Delete</button>
      <button>Submit</button>
    </div>
  )
};

export default Numpad;