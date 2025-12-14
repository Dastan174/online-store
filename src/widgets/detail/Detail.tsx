import Image from 'next/image'
import styles from './Detail.module.scss'

export default function Detail() {
	const img =
		'https://stroitel2005.ru/mod_files/catalog_1_items/img_img_catalog_1_items_74300.webp?1720114650'

	return (
		<section className={styles.detail}>
			<div className={styles.container}>
				<div className={styles.card}>
					<div className={styles.imageBlock}>
						<Image
							src={img}
							alt='Металлочерепица Classic'
							width={520}
							height={380}
							unoptimized
						/>
					</div>

					<div className={styles.info}>
						<h1 className={styles.title}>Металлочерепица Classic</h1>

						<div className={styles.specs}>
							<div>
								<span>Бренд</span>
								<b>Grande Line</b>
							</div>
							<div>
								<span>Высота волны, мм</span>
								<b>23.5</b>
							</div>
							<div>
								<span>Высота ступеньки, мм</span>
								<b>20</b>
							</div>
						</div>

						<div className={styles.price}>
							от <strong>433 ₽</strong> / м²
						</div>

						<div className={styles.selects}>
							<label>
								Цвет
								<select>
									<option>RAL 7004</option>
								</select>
							</label>
							<label>
								Толщина
								<select>
									<option>0.4</option>
								</select>
							</label>
							<label>
								Поверхность
								<select>
									<option>Выбрать</option>
								</select>
							</label>
						</div>

						<button className={styles.button}>Рассчитать стоимость</button>

						<div className={styles.tabs}>
							<button>Характеристики</button>
							<button>Описание</button>
							<button>Оплата</button>
							<button>Доставка</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
