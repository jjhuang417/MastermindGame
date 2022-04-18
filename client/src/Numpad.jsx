// Framework & Packages
import React, { useRef } from "react";

const Numpad = (props) => {
  // Allow input change
  const handleInput = (event) => {
    event.preventDefault();
    if (!isNaN(parseInt(event.nativeEvent.data)) && Number(event.nativeEvent.data) >= 0 && Number(event.nativeEvent.data) <= 7) {
      console.log(event.nativeEvent.data);
      props.addNum(event.nativeEvent.data);
    }
  };

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
    props.onChangeInput([]);
  };

  // Submit player guess
  const handleSubmit = (event) => {
    event.preventDefault();
    props.submitGuess();
  };

  return (
    <div name="numPadWrap" className="numPadWrap">
      <label>Code</label>
      <input
        className="underlineInput"
        maxLength="4"
        minLength="4"
        onChange={handleInput}
        value={props.playerInput.join("")}
      ></input>
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
