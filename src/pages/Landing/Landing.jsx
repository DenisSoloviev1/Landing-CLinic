import "./Landing.scss";
import React from "react";
import Header from "../../widgets/Header/Header.jsx";
import Footer from "../../widgets/Footer/Footer.jsx";
import Card from "../../widgets/Card/Card.jsx";
import NavButton from "../../widgets/NavButton/NavButton.jsx";

export default function Landing() {
  return (
    <>
      <Header />
      <main>
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
        <Card/>
        <NavButton actualCard={"1"} allCards={"4"}/>
      </main>
      <Footer />
    </>
  );
}
