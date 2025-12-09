'use client'

import { FC } from 'react'
import scss from './Catalog.module.scss'
import { CatalogList } from '@/entities/catalogList'
import ProductCardUI from '@/entities/productCard/ui/ProductCardUI'
const CatalogSection: FC = () => {
	const filters = ['Все', 'Металлочерепица', 'Профнастил', 'Фальцевая кровля']

	return (
		<section className={scss.section}>
			<div className='container'>
				<h1 className={scss.textCatalog}>КАТАЛОГ ТОВАРОВ</h1>

				<div className={scss.filters}>
					{filters.map((filter) => (
						<button key={filter}> {filter}</button>
					))}
				</div>

				<h2 className={scss.title}>Металлочерепица</h2>
				<div className={scss.cards}>
					<CatalogList />
				</div>
				<h2 className={scss.title}>Профнастил</h2>
				<div className={scss.cards}>
					<CatalogList />
				</div>
				<h2 className={scss.title}>Фальцевая кровля</h2>
				<div className={scss.cards}>
					<CatalogList />
				</div>
			</div>
		</section>
	)
}

export default CatalogSection
