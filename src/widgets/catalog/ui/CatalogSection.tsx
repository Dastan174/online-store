"use client";

import { FC } from "react";
import scss from "./Catalog.module.scss";
import { CatalogList } from "../../../entities/catalogList";
import ProductCardUI from "../../../entities/productCard/ui/ProductCardUI";
import { useReadProduct } from "../../../entities/lib/readProduct/useReadProduct";
// import Button from '@/shared/ui/button'

const CatalogSection: FC = () => {
  const {data} = useReadProduct()
  const filters = ["Все", "Металлочерепица", "Профнастил", "Фальцевая кровля"];
  // const product = {
  //   image: "https://lh6.googleusercontent.com/proxy/GjN501iwXUTQqlmhCzWe3aGqsZ16va1tpQFo5CeUblbo5jw7zQGKepcJaYcdnG0BEPPcCtXfY45-PWXeTqVkpMy5gyykblNGARDk5EzDK-4pWX8SxDuA5ntKSnFGzw",
  //   productName: "Профнастил HC35",
  //   brend: "Grandeline",
  //   maxLength: "12",
  //   minLength: "0,5",
  //   price: 412,
  // };

  return (
    <section className={scss.section}>
      <div className="container">
        <h1 className={scss.textCatalog}>КАТАЛОГ ТОВАРОВ</h1>

        <div className={scss.filters}>
          {filters.map((filter) => (
            <button key={filter}> {filter}</button>
          ))}
        </div>

        <h2 className={scss.title}>Металлочерепица</h2>
        <div className={scss.cards}>
           {
            data?.map((item) => (
              <ProductCardUI product={item} />

            ))
           }
        </div>
        <h2 className={scss.title}>Профнастил</h2>
        <div className={scss.cards}>
           {
            data?.map((item) => (
              <ProductCardUI product={item} />

            ))
           }
        </div>
        <h2 className={scss.title}>Фальцевая кровля</h2>
      <div className={scss.cards}>
           {
            data?.map((item) => (
              <ProductCardUI product={item} />

            ))
           }
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
