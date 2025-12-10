"use client"
import { useForm } from "react-hook-form";
import scss from "./productForm.module.scss";
import { useCreateProduct } from "../../lib/createProduct/useCreateProduct";

interface IProductProps {
  product?: IProduct;
}

export interface IProduct {
  title: string;
  brand: string;
  price: number | string;
  color: string;
  description: string;
  image: string;
}

export default function ProductForm({ product }: IProductProps) {
  const {handleSubmit, reset , register} = useForm()
  const {mutate: addProduct} = useCreateProduct() 
  const handleData = (data : IProduct) => {
    addProduct(data)
    reset()
  }
  return (
    <div className={scss.container}>
      <div className={scss.mainContainer}>
        <div className="container">
          <form onSubmit={handleSubmit(handleData)} className={scss.addToProducted}>
            <h2>Добавление товара</h2>
            <input {...register("title")}
              type="text"
              placeholder="Название товара"
              defaultValue={product?.title}
            />
            <input {...register("brand")}
              type="text"
              placeholder="Бренд"
              defaultValue={product?.brand}
            />
            <input {...register("price")}
              type="text"
              placeholder="Цена"
              defaultValue={product?.price}
            />
            <input {...register("color")}
              type="text"
              placeholder="Цвет"
              defaultValue={product?.color}
            />
            <input {...register("image")}
              type="text"
              placeholder="URL картинки"
              defaultValue={product?.image}
            />
            <textarea {...register("description")}
              placeholder="Описание"
              defaultValue={product?.description}
            />
            <button type="submit">Сохранить</button>
          </form>
        </div>
      </div>
    </div>
  );
}
