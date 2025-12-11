"use client";
import { useReadProduct } from "../../../entities/lib/readProduct/useReadProduct";
import ProductRow from "../../../entities/productRow/ui/ProductRow";
import scss from "./products.module.scss";

export default function Products() {
  const { data } = useReadProduct();
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.header}>
            <h1>Товары</h1>
            <button>+ Добавить товары</button>
          </div>
          <div className={scss.tableWrapper}>
            <div className={scss.table}>
              <div className={scss.headerRow}>
                <h2>Фото</h2>
                <h2>Название</h2>
                <h2>Бренд</h2>
                <h2>Цена</h2>
                <h2>Цвет</h2>
                <h2>Действия</h2>
              </div>
              <div className={scss.products}>
                {data?.map((item) => (
                  <ProductRow key={item._id} product={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
