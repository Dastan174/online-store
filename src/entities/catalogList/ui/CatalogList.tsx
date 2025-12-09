import { FC } from 'react'
import scss from './CatalogList.module.scss'
import ProductCardUI, { ProductCardProps } from '@/entities/productCard/ui/ProductCardUI'


export const CatalogList: FC<ProductCardProps> = () => {
	return (
				<ProductCardUI/>
		// <section className={scss.list}>
		// 	<div className={scss.grid}>
		// 		{items.map((item, index) => (
		// 			<div key={index} className={scss.card}>
		// 			</div>
		// 		))}
		// 	</div>
		// </section>
	)
}
