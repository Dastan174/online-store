import scss from "./questionsSection.module.scss";
import faqImg from "../../../../public/faqImg.png";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function QuestionsSection() {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <Image className={scss.faqImage} src={faqImg} alt="FAQ" />
          <div className={scss.faq_content}>
            <h1>ЕСТЬ ВОПРОСЫ?</h1>
            <p>
              Если у Вас есть вопросы или требуется помощь в подборе кровельных
              материалов, то оставьте свои данные, мы свяжемся с Вами и
              проконсультируем.
            </p>
            <button>Получить консультацию</button>
            <div className={scss.messangers}>
              <span>или напишите нам в мессенджер</span>
              <span className={scss.icons}>
                <FaWhatsapp />
              </span>
              <span className={scss.icons}>
                <FaTelegramPlane />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
