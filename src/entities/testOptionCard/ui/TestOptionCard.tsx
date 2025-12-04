import React from "react";
import scss from "./testOptionCard.module.scss";
import { FaCheck } from "react-icons/fa";

const options = [
  { id: 1, title: "Односкатная", img: "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&ar=16%3A9&crop=faces&fit=crop" },
  { id: 2, title: "Двускатная", img: "/images/Rectangle5.png" },
  { id: 3, title: "Вальмовая", img: "/images/Rectangle5.png" },
  { id: 4, title: "Плоская", img: "/images/Rectangle5.png" },
  { id: 5, title: "Комбинированная", img: "/images/Rectangle5.png" },
  { id: 6, title: "Арочная", img: "/images/Rectangle5.png" },
];

export const TestOptionCard = () => {
  return (
    <div className={scss.OptionCard}>
      {options.map((item) => (
        <label key={item.id} className={scss.card}>
          <input type="radio" name="roof" />
          <div className={scss.cardImg}>
            <img src={item.img} alt={item.title} />
          </div>
          <p>{item.title}</p>
          <div className={scss.check}>
            <div className={scss.checkCircle}><FaCheck /></div>
          </div>
        </label>
      ))}
    </div>
  );
};
