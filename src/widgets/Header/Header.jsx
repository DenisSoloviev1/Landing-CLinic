import React from "react";
import "./Header.scss";

export default function Header({children}) {
  return (
    <header>
      {children}
      <h1>LOGO</h1>
      <div className="info">
        <h4>+7(863) 000 00 00</h4>
        <p>Ростов-на-Дону</p>
      </div>
    </header>
  );
}
