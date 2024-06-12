import React from "react";
import "./Card.scss";
import СustomButton from "../СustomButton/СustomButton.jsx";

export default function Card() {
  return (
    <div className="card">
      <img src="/images/doctor-working-table.jpg" alt="doctor working table" />
      <div className="info">
        <div className="service">
          <h2>CHECK-UP</h2>
          <h4>для мужчин</h4>
          <ul>
            <li>Гормональный скрининг</li>
            <li>Тестостерон</li>
            <li>Свободный тестостерон</li>
            <li>Глобулин, связывающий половые гормоны</li>
          </ul>
        </div>

        <div className="price">
          <p>Всего 2800₽</p>
          <del>3500₽</del>
        </div>

        <div className="actions">
          <СustomButton text={"Записаться"} className={"green"} />
          <СustomButton text={"Подробнее"} className={"green-and-white"} />
        </div>
      </div>
    </div>
  );
}
