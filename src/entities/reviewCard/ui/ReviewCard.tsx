import Image from "next/image";
import scss from "./reviewCard.module.scss";

interface ReviewCardProps {
  img: string;
  clientName: string;
  date: string;
  comment: string;
}

export default function ReviewCard({
  img,
  clientName,
  date,
  comment,
}: ReviewCardProps) {
  return (
    <div className={scss.mainContainer}>
      <div className={scss.header_content}>
        <div className={scss.left_content}>
          <Image src={img} alt={clientName} width={70} height={70} />
          <div className={scss.name_date}>
            <h2>{clientName}</h2>
            <span>{date}</span>
          </div>
        </div>
        <div className={scss.right_content}>
          <Image
            src="/yandexMapsImg.svg"
            alt="yandex"
            width={100}
            height={40}
          />
        </div>
      </div>
      <p>{comment}</p>
    </div>
  );
}
