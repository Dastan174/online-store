import scss from "./reviews.module.scss";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      avatar: "https://via.placeholder.com/50",
      name: "Иван",
      text: "Отличный сервис! Всё понравилось, буду заказывать ещё.",
      date: "12.11.2024",
    },
  ];

  return (
    <div className={scss.wrapper}>
      <h1 className={scss.title}>Отзывы клиентов</h1>

      <div className={scss.list}>
        {reviews.map((review) => (
          <div key={review.id} className={scss.item}>
            <img src={review.avatar} alt="avatar" className={scss.avatar} />

            <div className={scss.info}>
              <div className={scss.name}>{review.name}</div>
              <div className={scss.text}>{review.text}</div>
              <div className={scss.date}>{review.date}</div>
            </div>

            <button className={scss.deleteBtn}>Удалить</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
