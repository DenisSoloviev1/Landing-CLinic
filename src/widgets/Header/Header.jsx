import React from "react";
import "./Header.scss";
import HumburgerMenu from "../HumburgerMenu/HumburgerMenu.jsx";

export default function Header() {
  return (
    <header>
      <HumburgerMenu/>
      <h1>LOGO</h1>
      <div className="info">
        <h4>+7(863) 000 00 00</h4>
        <p>Ростов-на-Дону</p>
      </div>
    </header>
  );
}
