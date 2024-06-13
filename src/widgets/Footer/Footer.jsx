import React from "react";
import "./Footer.scss";
import Menu from "../Menu/Menu.jsx";
import SocialWeb from "../SocialWeb/SocialWeb.jsx";

export default function Footer() {
  return (
    <footer>
      <h2>
        LOGO <Menu />
      </h2>
      <SocialWeb />
    </footer>
  );
}
