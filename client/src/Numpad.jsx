// Framework & Packages
import React from "react";

const Numpad = (props) => {
  const num = ["0", "1", "2", "3", "4", "5", "6", "7"];
  const hardNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // Allow input change
  const handleInput = (event) => {
    const maxGuess = props.hard ? 9 : 7;
    event.preventDefault();
    if (
      !isNaN(parseInt(event.nativeEvent.data)) &&
      Number(event.nativeEvent.data) >= 0 &&
      Number(event.nativeEvent.data) <= maxGuess
    ) {
      props.addNum(event.nativeEvent.data);
    }
  };

  // Adding numbers
  const handleAdd = (event) => {
    event.preventDefault();
    props.addNum(event.target.value);
  };

  // Delete numbers
  const handleDelete = () => {
    props.onChangeInput(props.playerInput.slice(0, -1));
  };

  // Wipe player input
  const handleClear = () => {
    props.onChangeInput([]);
  };

  // Submit player guess
  const handleSubmit = (event) => {
    event.preventDefault();
    props.submitGuess();
  };

  // Handle key down
  const handleKeyDown = (event) => {
    if (event.code === "Backspace") {
      handleDelete();
    }
  };

  // Handle key press
  const handleKeyPress = (event) => {
    if (event.code === "Enter") {
      handleSubmit(event);
    }
  };

  const numsToRender = props.hard ? hardNum : num;

  return (
    <div name="numPadWrap" className="numPadWrap">
      <div className="functionButton">
        {numsToRender.map((n, idx) => (
          <button
            key={idx}
            className="button-22"
            onClick={handleAdd}
            type="button"
            value={n}
          >
            {n}
          </button>
        ))}
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
      <input
        id="playerInputField"
        className="underlineInput"
        maxLength="4"
        minLength="4"
        onKeyDown={handleKeyDown}
        onChange={handleInput}
        onKeyPress={handleKeyPress}
        value={props.playerInput.join("")}
      ></input>
    </div>
  );
};

export default Numpad;
