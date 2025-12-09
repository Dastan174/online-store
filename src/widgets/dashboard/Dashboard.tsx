import StatsCard from "../../entities/statsCard/StatsCard";
import styles from "./dashboard.module.scss";
export default function Dashboard() {
  return (
    <section className={styles.dashboard}>
      <h1 className={styles.title}>Dashboard</h1>

      <div className={styles.statsGrid}>
        <StatsCard title="Продукты" value="120 товаров" />
        <StatsCard title="Заказы" value="14 заказов" />
        <StatsCard title="Пользователи" value="25 пользователей" />
        <StatsCard title="Отзывы" value="9 отзывов" />
      </div>
      <div className={styles.chartPlaceholder}>Chart Placeholder</div>
    </section>
  );
}
