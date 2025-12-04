import Image from "next/image";
import { FaWhatsapp, FaTelegram, FaVk } from "react-icons/fa";
import scss from "./header.module.scss";
import logo from "../../../../public/logo.svg";

function Header() {
  return (
    <header className={scss.container}>
      <div className="container">
        <div className={scss.main}>
          <div className={scss.address}>
            <Image src={logo} alt="logo" width={70} height={70} />
            <span className={scss.separator}>|</span>
            <h2>Санкт-Петербург, Горелово, Волхонское шоссе, 6</h2>
          </div>

          <button className={scss.button}>Посмотреть каталог</button>

          <div className={scss.icons}>
            <span>Задайте вопрос online:</span>
            <div className={scss.socials}>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className={scss.wa}
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                className={scss.tg}
              >
                <FaTelegram />
              </a>
              <a
                href="https://vk.com/"
                target="_blank"
                rel="noreferrer"
                className={scss.vk}
              >
                <FaVk />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
