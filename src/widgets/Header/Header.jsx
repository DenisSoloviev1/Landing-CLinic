import React from "react";
import "./Header.scss";
import CustomButton from "../Buttons/СustomButton/СustomButton.jsx";

export default function Header({ children }) {
  return (
    <header>
      <section>
        {children}
        <h1>LOGO</h1>
        <div className="contact">
          <h4>+7(863) 000 00 00</h4>
          <p>Ростов-на-Дону</p>
        </div>

        <div className="address">
          <p>
            <svg viewBox="0 0 36 36">
              <path d="m18 2c-6.065 0-11 5.383-11 12 0 6.344 9.792 19.073 10.209 19.612a1 1 0 0 0 1.582 0c.417-.539 10.209-13.268 10.209-19.612 0-6.617-4.935-12-11-12zm0 16a5 5 0 1 1 5-5 5.006 5.006 0 0 1 -5 5z" />
            </svg>
            Ростов-на-Дону
          </p>
          <p id="street">ул. Ленина, 2Б</p>
        </div>
      </section>

      <section id="laptop">
        <div className="whatsApp">
          <img src="/images/WhatsApp.png" alt="WhatsApp" />
          <p> +7(863) 000 00 00</p>
        </div>

        <CustomButton text={"Записаться на прием"} className={"green"} />
      </section>
    </header>
  );
}
