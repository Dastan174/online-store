import scss from './productCardUi.module.scss'

 export interface ProductCardProps {
	img: string
	productName: string
	brend: string
	maxLength: string
	minLength: string
	price: number
}

const ProductCardUI = ({
	img = 'https://lh6.googleusercontent.com/proxy/GjN501iwXUTQqlmhCzWe3aGqsZ16va1tpQFo5CeUblbo5jw7zQGKepcJaYcdnG0BEPPcCtXfY45-PWXeTqVkpMy5gyykblNGARDk5EzDK-4pWX8SxDuA5ntKSnFGzw',
	productName = 'Профнастил HC35',
	brend = 'Grandeline',
	maxLength = '12',
	minLength = '0,5',
	price = 412,
}: ProductCardProps) => {
	return (
		<section className={scss.card}>
			<img src={img} alt={productName} className={scss.image} />

			<h2 className={scss.title}>{productName}</h2>

			<div className={scss.brends}>
				<p>Бренд</p>
				<p className={scss.value}>{brend}</p>

				<p>Максимальная длина, м</p>
				<p className={scss.value}>{maxLength}</p>

				<p>Минимальная длина, м</p>
				<p className={scss.value}>{minLength}</p>
			</div>

			<div className={scss.priceBlock}>
				<span>от</span>
				<h3>{price} ₽ / м²</h3>
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
	)
}

export default ProductCardUI
