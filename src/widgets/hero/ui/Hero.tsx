import scss from "./hero.module.scss";

export default function Hero() {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>hero</div>
      </div>
    </div>
  );
}
