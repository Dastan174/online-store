import { TestOptionCard } from "@/entities/testOptionCard/ui/TestOptionCard";
import scss from "./testSection.module.scss";
import InfoItem from "@/entities/infoItem/ui/InfoItem";

export const TestSection = () => {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <h1>
            <span>Пройдите тест и рассчитайте </span>
            <br />
            стоимость кровли под ваш объект <br />с точностью 97%
          </h1>
          <div className={scss.testBlock}>
            <div className={scss.right}>
              <div className={scss.discount}>
                <div className={scss.percent}></div>
                <p>Расчет произведен на 15%</p>
              </div>
              <div className={scss.text}>
                <h3>
                  <span>Вопрос 1 из 6:</span> Выберите тип Вашей крыши
                </h3>
                <p>
                  Выберите один из вариантов и переходите к следующему вопросу
                </p>
              </div>
            <TestOptionCard />
            </div>
            <div className={scss.left}>
                <div className={scss.cardImg}>
                    <img src="/images/left.png" alt="himg" />
                    <h4>Ответьте на 5 вопросов <br />
                    и получите в конце:</h4>
                </div>
           <InfoItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
