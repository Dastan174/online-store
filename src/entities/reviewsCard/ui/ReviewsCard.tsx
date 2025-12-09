import scss from "./reviewsCard.module.scss";

interface ReviewProps {
  review: {
    id: string;
    avatar?: string;
    name: string;
    text: string;
    date: string;
  };
}

export const ReviewCard = ({ review }: ReviewProps) => {
  return (
    <div className={scss.card}>
      <div className={scss.avatar}>
        {review?.avatar ? (
          <img src={review?.avatar} alt={review?.name} />
        ) : (
          <div className={scss.placeholder}></div>
        )}
      </div>

      <div className={scss.info}>
        <h3 className={scss.name}>{review?.name}</h3>
        <p className={scss.text}>{review?.text}</p>
        <span className={scss.date}>{review?.date}</span>
      </div>

      <button className={scss.delete}>Удалить</button>
    </div>
  );
};

export default ReviewCard;
