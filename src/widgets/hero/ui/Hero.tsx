import scss from "./hero.module.scss";

export default function Hero() {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.left}>
            <h1>
              ПРОДАЖА КРОВЕЛЬНЫХ МАТЕРИАЛОВ{" "}
              <span>С ДОСТАВКОЙ ПО САНКТ-ПЕТЕРБУРГУ И ОБЛАСТИ</span> В ДЕНЬ
              ЗАКАЗА
            </h1>
            <p>
              За 1 минуту пройдите тест и{" "}
              <span>рассчитайте стоимость кровли</span> под ваш объект с
              точностью 97% и получите подарки
            </p>
            <button>РАССЧИТАТЬ СТОИМОСТЬ МАТЕРИАЛОВ</button>
          </div>
        </div>
        <div className={scss.adaptiveImg}>
          <img
            src="https://www.kozlik-bedachungen.eu/fileadmin/user_upload/dach/steildach/header.jpg"
            alt="Adaptive"
          />
        </div>
      </div>
    </div>
  );
}
