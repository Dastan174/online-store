import Image from "next/image";
import scss from "./reviewCard.module.scss";
import clientImg from "../../../../public/clientImg.svg";
import clientImg2 from "../../../../public/clientImg2.svg";
import clientImg3 from "../../../../public/clientImg3.svg";

import yandexImg from "../../../../public/yandexMapsImg.svg";

export default function ReviewCard() {
  return (
    <>
      <div className={scss.mainContainer}>
        <div className={scss.header_content}>
          <div className={scss.left_content}>
            <Image src={clientImg} alt="client" width={70} height={70} />
            <div className={scss.name_date}>
              <h2>Serg</h2>
              <span>27.07.2022</span>
            </div>
          </div>
          <div className={scss.right_content}>
            <Image src={yandexImg} alt="client" width={100} height={40} />
          </div>
        </div>
        <p>
          Долго думал где покупать арматуру на фундамент, по рекомендации друзей
          заказывал на этой металлобазе. Менеджер Дмитрий все четко посчитал,
          цена меня устроила. Доставка была в срок. Буду и дальше с ним
          работать.
        </p>
      </div>
      <div className={scss.mainContainer}>
        <div className={scss.header_content}>
          <div className={scss.left_content}>
            <Image src={clientImg2} alt="client" width={70} height={70} />
            <div className={scss.name_date}>
              <h2>Квартира дом</h2>
              <span>21.01.2022</span>
            </div>
          </div>
          <div className={scss.right_content}>
            <Image src={yandexImg} alt="client" width={100} height={40} />
          </div>
        </div>
        <p>
          Рекомендую! Прекрасная компания. Обращаюсь не в первый раз. Менеджеры
          клиентоориентированы. Приятно, когда тебя и твои запросы понимают.
          Всегда гуманные цены. Профлист качественный, снегозадержатели супер.
          Спасибо!
        </p>
      </div>
      <div className={scss.mainContainer}>
        <div className={scss.header_content}>
          <div className={scss.left_content}>
            <Image src={clientImg3} alt="client" width={70} height={70} />
            <div className={scss.name_date}>
              <h2>Вячеслав Е</h2>
              <span>10.12.2022</span>
            </div>
          </div>
          <div className={scss.right_content}>
            <Image src={yandexImg} alt="client" width={100} height={40} />
          </div>
        </div>
        <p>
          Все чётко. Приняли заказ по телефону, пока ехал подготовили все
          документы отправили на wats app точку чтобы не заблудился. Приехал,
          оплатил, забрал 10 минут максимум.
        </p>
      </div>
    </>
  );
}
