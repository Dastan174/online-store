import styles from './StatsCard.module.scss'

type Props = {
	title: string
	value: string
}

export default function StatsCard({ title, value }: Props) {
	return (
		<div className={styles.card}>
			<div className={styles.value}>{value}</div>
			<div className={styles.title}>{title}</div>
		</div>
	)
}
