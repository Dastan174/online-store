'use client'

import { FC } from 'react'
import scss from './Catalog.module.scss'
import { CatalogList } from '../../../entities/catalogList'
// import Button from '@/shared/ui/button'

const CatalogSection: FC = () => {
	const filters = ['Все', 'Металлочерепица', 'Профнастил', 'Фальцевая кровля']
	const metalItems = ['М1', 'М2', 'М3']
	const profItems = ['П1', 'П2', 'П3', 'П4']

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
					<CatalogList items={metalItems} />
				</div>
				<h2 className={scss.title}>Профнастил</h2>
				<div className={scss.cards}>
					<CatalogList items={profItems} />
				</div>
				<h2 className={scss.title}>Фальцевая кровля</h2>
				<div className={scss.cards}>
					<CatalogList items={profItems} />
				</div>
			</div>
		</section>
	)
}

export default CatalogSection
