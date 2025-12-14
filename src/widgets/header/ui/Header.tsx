"use client";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaTelegram, FaVk, FaUserPlus } from "react-icons/fa";
import scss from "./header.module.scss";
import logo from "../../../../public/logo.svg";
import { MdAdminPanelSettings } from "react-icons/md";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  return (
    <header className={scss.container}>
      <div className="container">
        <div className={scss.main}>
          <div className={scss.address}>
            <Image src={logo} alt="logo" width={70} height={70} />
            <span className={scss.separator}>|</span>
            <h2>Санкт-Петербург, Горелово, Волхонское шоссе, 6</h2>
          </div>

          <div className={scss.actions}>
            <button className={scss.button}>Посмотреть каталог</button>
          </div>

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
              <a onClick={() => router.push("/admin")} className={scss.admin}>
                <MdAdminPanelSettings />
              </a>
            </div>
          </div>

          <Link href="/register" className={scss.register}>
            <FaUserPlus />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
