import scss from "./aboutUs.module.scss";
import { CiSquareCheck } from "react-icons/ci";
import { IoCubeOutline } from "react-icons/io5";
import { BsTruck } from "react-icons/bs";
import { CiCreditCard2 } from "react-icons/ci";
import { CgSandClock } from "react-icons/cg";
import { HiOutlineUsers } from "react-icons/hi2";

export default function AboutUs() {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.aboutUS}>
            <h1>
              О НАС <br className={scss.brH1} /> и НАШЕМ БИЗНЕСЕ
            </h1>
            <p>
              Каждому клиенту мы гарантируем взаимовыгодные условия
              сотрудничества. Мы дорожим своими заказчиками, поэтому брак и
              низкокачественный металл никогда не поступают на склады
              предприятия. С нами – надежно, выгодно и безопасно!
            </p>
          </div>
          <div className={scss.aboutList}>
            <div className={scss.aboutCard}>
              <span>{<CiSquareCheck />}</span>
              <h4>Постоянное наличие</h4>
              <p>
                Прямая работа с производителем обеспечивает постоянное наличие
                всех видом металлопроката
              </p>
            </div>
            <div className={scss.aboutCard}>
              <span>{<IoCubeOutline />}</span>
              <h4>Собственный автопарк</h4>
              <p>
                Автомобили грузоподъемностью от 1.5 до 20 тонн. Всегда быстрая
                доставка.
              </p>
            </div>
            <div className={scss.aboutCard}>
              <span>{<BsTruck />}</span>
              <h4>Объемы поставок</h4>
              <p>
                Собственная служба доставки, гаранатирует вам поставку
                материалов на объект в кратчайшие сроки.
              </p>
            </div>
            <div className={scss.aboutCard}>
              <span>{<CiCreditCard2 />}</span>
              <h4>Справедливая цена</h4>
              <p>
                Собственные ресурсы и транспорт позволяют снижать стоимость.
              </p>
            </div>
            <div className={scss.aboutCard}>
              <span>{<CgSandClock />}</span>
              <h4>Обработка заявки 30 минут</h4>
              <p>
                Отдел продаж, насчитывающий более 80 сотрудников, не оставит
                вашу заявку без внимания.
              </p>
            </div>
            <div className={scss.aboutCard}>
              <span>{<HiOutlineUsers />}</span>
              <h4>Погрузка без очередей</h4>
              <p>
                Развитая складская логистика позволяет отгружать продукцию
                всегда без очередей.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
