import InfoItem from "../../../entities/infoItem/ui/InfoItem";
import scss from "./testFiveSection.module.scss";

export default function TestFiveSection() {
  return (
    <div className={scss.overlay}>
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
                  <p>Расчет произведен на 70%</p>
                </div>
                <div className={scss.text}>
                  <h3>
                    <span>Вопрос 5 из 6:</span> Ориентировочная площадь Вашей
                    кровли или площадь дома
                  </h3>
                  <div className={scss.house}>
                    <div className={scss.radioGroup}>
                      <div className={scss.radioLabel}>
                        <input type="radio" name="area-type" defaultChecked />
                        <span className={scss.radioText}>Площадь кровли</span>
                      </div>
                      <div className={scss.radioLabel}>
                        <input type="radio" name="area-type" />
                        <span className={scss.radioText}>Площадь дома</span>
                      </div>
                    </div>

                    <div className={scss.inputWrapper}>
                      <input
                        type="number"
                        className={scss.input}
                        defaultValue="136"
                        placeholder="136"
                      />
                      <span className={scss.inputUnit}>м2</span>
                    </div>
                  </div>

                  <div className={scss.slider}>
                    <input
                      type="range"
                      min="10"
                      max="1000"
                      defaultValue="136"
                    />
                    <div className={scss.sliderLabels}>
                      <span>10 м2</span>
                      <span>1000 м2</span>
                    </div>
                  </div>

                  <div className={scss.buttons}>
                    <button className={scss.btnBack}>Назад</button>
                    <button className={scss.btnNext}>Далее</button>
                  </div>
                </div>
              </div>

               <div className={scss.left}>
                <div className={scss.cardImg}>
                  <img src="/images/left.png" alt="Декор" />
                  <h4>
                    Ответьте на <span>5 вопросов</span>
                    <br />и получите в конце:
                  </h4>
                </div>
                <div className={scss.infoItems}>
                  <InfoItem />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
