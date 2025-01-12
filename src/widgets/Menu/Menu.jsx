import React from "react";
import "./Menu.scss";

export default function Menu({ show, handleClose, children }) {
  return <div className={`menu ${show ? "show" : ""}`}>{children}</div>;
}
