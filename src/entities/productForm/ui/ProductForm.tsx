import scss from "./productForm.module.scss";

interface IProductProps {
  product?: IProduct;
}

interface IProduct {
  title: string;
  brand: string;
  price: number | string;
  color: string;
  description: string;
  image: string;
}

export default function ProductForm({ product }: IProductProps) {
  return (
    <div className={scss.container}>
      <div className={scss.mainContainer}>
        <div className="container">
          <div className={scss.addToProducted}>
            <h2>Добавление товара</h2>
            <input
              type="text"
              placeholder="Название товара"
              defaultValue={product?.title}
            />
            <input
              type="text"
              placeholder="Бренд"
              defaultValue={product?.brand}
            />
            <input
              type="text"
              placeholder="Цена"
              defaultValue={product?.price}
            />
            <input
              type="text"
              placeholder="Цвет"
              defaultValue={product?.color}
            />
            <input
              type="text"
              placeholder="URL картинки"
              defaultValue={product?.image}
            />
            <textarea
              placeholder="Описание"
              defaultValue={product?.description}
            />
            <button>Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  );
}
