import React from "react";
import "./ModalWindow.scss";

export default function ModalWindow({ show, handleClose }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("/sendMail.php", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Сообщение отправлено успешно.");
        handleClose(); // Закрытие модального окна после успешной отправки
      } else {
        alert("Ошибка при отправке сообщения.");
      }
    } catch (error) {
      alert("Ошибка при отправке сообщения.");
    }
  };

  return (
    <div className={`modal ${show ? "show" : ""}`}>
      <button className="green-and-white close-button" onClick={handleClose}>
        X
      </button>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email:" required />
        <textarea name="message" placeholder="Сообщение:" required></textarea>
        <button className="green-and-white" type={"submit"}>
          Отправить
        </button>
      </form>
    </div>
  );
}
