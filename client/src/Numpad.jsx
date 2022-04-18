// Framework & Packages
import React from "react";

const Numpad = (props) => {
  // Adding numbers
  const handleAdd = (event) => {
    event.preventDefault();
    props.addNum(event.target.value);
  };

  // Delete numbers
  const handleDelete = (event) => {
    event.preventDefault();
    props.onChangeInput(props.playerInput.slice(0, -1));
  };

  // Wipe player input
  const handleClear = (event) => {
    event.preventDefault();
    props.onChangeInput([])
  };

  // Submit player guess
  const handleSubmit = (event) => {
    event.preventDefault();
    props.submitGuess();
  };

  return (
    <div name="numPadWrap" className="numPadWrap">
      <div className="functionButton">
        <button
          className="button-22"
          onClick={handleAdd}
          type="button"
          value="0"
        >
          0
        </button>
        <button
          className="button-22"
          onClick={handleAdd}
          type="button"
          value="1"
        >
          1
        </button>
        <button
          className="button-22"
          onClick={handleAdd}
          type="button"
          value="2"
        >
          2
        </button>
        <button
          className="button-22"
          onClick={handleAdd}
          type="button"
          value="3"
        >
          3
        </button>
        <button
          className="button-22"
          onClick={handleAdd}
          type="button"
          value="4"
        >
          4
        </button>
        <button
          className="button-22"
          onClick={handleAdd}
          type="button"
          value="5"
        >
          5
        </button>
        <button
          className="button-22"
          onClick={handleAdd}
          type="button"
          value="6"
        >
          6
        </button>
        <button
          className="button-22"
          onClick={handleAdd}
          type="button"
          value="7"
        >
          7
        </button>
      </div>
      <div className="functionButton">
        <button className="button-25" onClick={handleDelete}>
          Delete
        </button>
        <button className="button-25" onClick={handleClear}>
          Clear
        </button>
        <button className="button-25" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Numpad;
