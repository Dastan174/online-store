import { FC } from 'react'
import scss from './CatalogList.module.scss'

interface CatalogListProps {
  items: string[]
}

export const CatalogList: FC<CatalogListProps> = ({ items }) => {
  return (
    <section className={scss.list}>
      <div className={scss.grid}>
        {items.map((item, index) => (
          <div key={index} className={scss.card}>
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}