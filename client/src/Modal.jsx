import React from "react";

const Modal = (props) => {
  const handleCloseModal = () => {
    props.closeModal();
  };

  return (
    <div className="modal">
      <div className="modalContent">
        <div className="closeBtnWrap">
          <button className="closeBtn" onClick={handleCloseModal}>
            X
          </button>
        </div>
        {props.playerInput?.join("") === props.sequence?.join("") ? (
          <h3 className="gameTxt">CONGRATS! YOU BEAT THE MASTERMIND.</h3>
        ) : (
          <h3 className="gameTxt">
            YOU DIED...SHOULD'VE GUESSED {props.sequence}
          </h3>
        )}
      </div>
    </div>
  );
};

export default Modal;
