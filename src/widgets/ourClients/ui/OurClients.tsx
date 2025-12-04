import React from "react";
import scss from "./ourClients.module.scss";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import ReviewCard from "@/entities/reviewCard/ui/ReviewCard";

const reviews = [
  {
    id: 1,
    img: "/clientImg.svg",
    clientName: "Serg",
    date: "27.07.2022",
    comment:
      "Долго думал где покупать арматуру на фундамент, по рекомендации друзей заказывал на этой металлобазе. Менеджер Дмитрий все четко посчитал, цена меня устроила. Доставка была в срок. Буду и дальше с ним работать.",
  },
  {
    id: 2,
    img: "/clientImg2.svg",
    clientName: "Квартира дом",
    date: "21.01.2022",
    comment:
      "Рекомендую! Прекрасная компания. Обращаюсь не в первый раз. Менеджеры клиентоориентированы. Приятно, когда тебя и твои запросы понимают. Всегда гуманные цены. Профлист качественный, снегозадержатели супер. Спасибо!",
  },
  {
    id: 3,
    img: "/clientImg3.svg",
    clientName: "Вячеслав Е",
    date: "10.12.2022",
    comment:
      "Все чётко. Приняли заказ по телефону, пока ехал подготовили все документы отправили на wats app точку чтобы не заблудился. Приехал, оплатил, забрал 10 минут максимум.",
  },
];

const OurClients = () => {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <h1>
            <span>ЛУЧШЕ ВСЕГО О НАС</span>
            РАССКАЖУТ НАШИ КЛИЕНТЫ
          </h1>
          <div className={scss.icons}>
            <span>
              <GoArrowLeft />
            </span>
            <span>
              <GoArrowRight />
            </span>
          </div>
          <div className={scss.cards}>
            {reviews.map((item) => (
              <ReviewCard
                key={item.id}
                img={item.img}
                clientName={item.clientName}
                date={item.date}
                comment={item.comment}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
