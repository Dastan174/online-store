import Image from "next/image";
import scss from "./productRow.module.scss";

interface Product {
  image: string;
  title: string;
  brand: string;
  price: string;
  color: string;
}

interface ProductRowProps {
  product: Product;
}

export default function ProductRow({ product }: ProductRowProps) {
  return (
    <div className={scss.container}>
      <div className={scss.mainContainer}>
        <Image src={product.image} width={50} height={50} alt={product.title} />
        <h2>{product.title}</h2>
        <h2>{product.brand}</h2>
        <h2>{product.price}</h2>
        <h2>{product.color}</h2>
        <div className={scss.btns}>
          <button className={scss.updateBtn}>Редактировать</button>
          <button className={scss.deleteBtn}>Удалить</button>
        </div>
      </div>
    </div>
  );
}
