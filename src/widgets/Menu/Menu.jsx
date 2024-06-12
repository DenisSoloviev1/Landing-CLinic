import React from "react";
import "./Menu.scss";
import { NavLink } from "react-router-dom";

export default function Menu(){
    return(
        <nav>
            <NavLink>О клинике</NavLink>
            <NavLink>Услуги</NavLink>
            <NavLink>Специалисты</NavLink>
            <NavLink>Цены</NavLink>
            <NavLink>Контакты</NavLink>
        </nav>
    );
}