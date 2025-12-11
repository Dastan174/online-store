"use client";
import scss from "./productRow.module.scss";
import { useReadProduct } from "../../lib/readProduct/useReadProduct";
import Image from "next/image";
import { useDeleteProduct } from "../../lib/deleteProduct/useDeleteProduct";
interface Product {
  image: string;
  title: string;
  brand: string;
  price: string;
  color: string;
  description: string;
  _id?: number
}

interface ProductRowProps {
  product: Product;
}

export default function ProductRow({ product }: ProductRowProps) {
const {mutate: deleteProduct} = useDeleteProduct()
  return (
    <div className={scss.container}>
      <div className={scss.mainContainer}>
        <img src={product?.image} width={50} height={50} alt={product?.title} />
        <h2>{product?.title}</h2>
        <h2>{product?.brand}</h2>
        <h2>{product?.price}</h2>
        <h2>{product?.color}</h2>
        <div className={scss.btns}>
          <button className={scss.updateBtn}>Редактировать</button>
          <button onClick={() => deleteProduct(product._id)} className={scss.deleteBtn}>Удалить</button>
        </div>
      </div>
    </div>
  );
}
