import Image from "next/image";
import { FaWhatsapp, FaTelegram, FaVk } from "react-icons/fa";
import scss from "./footer.module.scss";
import logo from "../../../../public/logo.svg";

export default function Footer() {
  return (
    <footer className={scss.container}>
      <div className="container">
        <div className={scss.main}>
          <Image src={logo} alt="logo" width={70} height={70} />

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

        <p className={scss.text}>© 2025 Online Store</p>
      </div>
    </footer>
  );
}
