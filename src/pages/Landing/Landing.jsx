import "./Landing.scss";
import React, { useState } from "react";
import Header from "../../widgets/Header/Header.jsx";
import Main from "../../widgets/Main/Main.jsx";
import Footer from "../../widgets/Footer/Footer.jsx";
import Card from "../../widgets/Card/Card.jsx";
import NavButton from "../../widgets/Buttons/NavButton/NavButton.jsx";
import Modal from "../../widgets/Modal/Modal.jsx";
import HumburgerButton from "../../widgets/Buttons/HumburgerButton/HumburgerButton.jsx";
import CustomButton from "../../widgets/Buttons/СustomButton/СustomButton.jsx";
import Menu from "../../widgets/Menu/Menu.jsx";

export default function Landing() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <Header
        children={
          <HumburgerButton showModal={showModal} toggleModal={toggleModal} />
        }
      />
      <Main>
        <section>
          <img src="/images/image.png" alt="кабинет врача" />
          <div className="wrap">
            <h1>Многопрофильная клиника для детей и взрослых</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </section>
        <Card />
        <NavButton actualCard={"1"} allCards={"4"} />
      </Main>
      <Modal show={showModal} handleClose={toggleModal}>
        <Menu />
        <CustomButton text={"Записаться на прием"} className={"white"} />
      </Modal>
      <Footer />
    </>
  );
}
