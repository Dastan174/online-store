import React from "react";
import scss from "./productCardUi.module.scss";
import { useReadProduct } from "../../lib/readProduct/useReadProduct";


interface ProductCardProps {
  product: ProductCard;
}
interface ProductCard {
  img: string;
  productName: string;
  brend: string;
  maxLength: string;
  minLength: string;
  price: number;
}

const ProductCardUI = ({ product }: ProductCardProps) => {
  
  return (
    <section className={scss.card}>
      <img src={product.img} alt={product.productName} className={scss.image} />

      <h2 className={scss.title}>{product.productName}</h2>

      <div className={scss.brends}>
        <p>Бренд</p>
        <p className={scss.value}>{product.brend}</p>

        <p>Максимальная длина, м</p>
        <p className={scss.value}>{product.maxLength}</p>

        <p>Минимальная длина, м</p>
        <p className={scss.value}>{product.minLength}</p>
      </div>

      <div className={scss.priceBlock}>
        <span>от</span>
        <h3>{product.price} ₽ / м²</h3>
      </div>

      <div className={scss.selects}>
        <div className={scss.selectBox}>
          <label>Цвет</label>
          <select>
            <option>RAL</option>
            <option>Цинк</option>
            <option>Медь</option>
          </select>
        </div>

        <div className={scss.selectBox}>
          <label>Толщина</label>
          <select>
            <option>0,45</option>
            <option>0,5</option>
            <option>0,7</option>
          </select>
        </div>

        <div className={scss.selectBox}>
          <label>Поверхность</label>
          <select>
            <option>Матовая</option>
            <option>Глянцевая</option>
          </select>
        </div>
      </div>
      <div className={scss.btns}>
        <button className={scss.btn}>Рассчитать стоимость</button>
        <button className={scss.aboutBtns}>Подробнее о товаре</button>
      </div>
    </section>
  );
};

export default ProductCardUI;
