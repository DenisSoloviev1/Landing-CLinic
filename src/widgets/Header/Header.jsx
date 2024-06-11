import React from "react";
import "./Header.scss";
import HumburgerMenu from "../HumburgerMenu/HumburgerMenu.jsx";

export default function Header() {
  return (
    <header>
      <HumburgerMenu/>
      <h1>LOGO</h1>
    </header>
  );
}
