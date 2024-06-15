import React, { useState } from "react";
import "./СustomButton.scss";
import ModalWindow from "../../ModalWindow/ModalWindow.jsx";

export default function CustomButton({ text, className, onClick }) {
  //ModalWindow
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <button
        id="customButton"
        className={className}
        onClick={text === "Записаться" || text === "Записаться на прием"? handleButtonClick : null}
      >
        {text}
      </button>
      <ModalWindow show={showModal} handleClose={handleCloseModal} />
    </>
  );
}
