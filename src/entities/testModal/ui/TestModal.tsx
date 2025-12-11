import InfoItem from "../../infoItem/ui/InfoItem";
import scss from "./testModal.module.scss";
import testModalImg from "../../../../public/testModalImg.png";
import Image from "next/image";



export default function TestModal() {

  return (
    <div className={scss.overlay}>
      <div className={scss.container}>
        <div className="container">
          <div className={scss.mainContainer}>
            <h1 className={scss.title}>
              <span>Пройдите тест и рассчитайте</span>
              <br />
              стоимость кровли под ваш объект
              <br />с точностью 97%
            </h1>

            <div className={scss.testBlock}>
              <div className={scss.right}>
                <div className={scss.discount}>
                  <div className={scss.percent}></div>
                  <p>Расчет произведен на 100%</p>
                </div>

                <div className={scss.text}>
                  <h3>
                    Готово. Ваши ответы получены и мы в ближайшее время свяжемся
                    с вами!
                  </h3>
                  <p>
                    Введите номер телефона, чтобы Вы могли отправить расчет и
                    связаться с вами.
                  </p>

                  <div className={scss.formGroup}>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className={scss.input}
                    />
                    <input
                      type="tel"
                      placeholder="+7 (999) 999-99-99"
                      className={scss.input}
                    />
                    <button className={scss.submitBtn}>
                      Рассчитать стоимость
                    </button>
                  </div>

                  <div className={scss.checkbox}>
                    <input type="checkbox" id="agree" />
                    <p>
                      Нажимая на кнопку, я даю согласие на обработку моих
                      персональных данных.
                    </p>
                  </div>
                </div>
              </div>

              <div className={scss.imageWrapper}>
                <Image
                  src={testModalImg}
                  width={350}
                  height={500}
                  alt="Специалист"
                  className={scss.mainImage}
                />
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