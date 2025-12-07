"use client";

import { FC } from "react";
import scss from "./Catalog.module.scss";
import { CatalogList } from "../../../entities/catalogList";
import ProductCardUI from "../../../entities/productCard/ui/ProductCardUI";
// import Button from '@/shared/ui/button'

const CatalogSection: FC = () => {
  const filters = ["Все", "Металлочерепица", "Профнастил", "Фальцевая кровля"];
  const metalItems = ["М1", "М2", "М3"];
  const profItems = ["П1", "П2", "П3", "П4"];
  const product = {
    img: "https://lh6.googleusercontent.com/proxy/GjN501iwXUTQqlmhCzWe3aGqsZ16va1tpQFo5CeUblbo5jw7zQGKepcJaYcdnG0BEPPcCtXfY45-PWXeTqVkpMy5gyykblNGARDk5EzDK-4pWX8SxDuA5ntKSnFGzw",
    productName: "Профнастил HC35",
    brend: "Grandeline",
    maxLength: "12",
    minLength: "0,5",
    price: 412,
  };

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
          <ProductCardUI product={product} />
          <ProductCardUI product={product} />
          <ProductCardUI product={product} />
          <ProductCardUI product={product} />
        </div>
        <h2 className={scss.title}>Профнастил</h2>
        <div className={scss.cards}>
          <ProductCardUI product={product} />
          <ProductCardUI product={product} />
          <ProductCardUI product={product} />
          <ProductCardUI product={product} />
        </div>
        <h2 className={scss.title}>Фальцевая кровля</h2>
        <div className={scss.cards}>
          <ProductCardUI product={product} />
          <ProductCardUI product={product} />
          <ProductCardUI product={product} />
          <ProductCardUI product={product} />
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
