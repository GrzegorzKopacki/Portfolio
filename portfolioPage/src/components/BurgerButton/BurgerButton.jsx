import styles from "./BurgerButton.module.css"

export function BurgerButton() {
	return (
		<button className={styles.burgerButton}>
			<span></span>
			<span></span>
			<span></span>
		</button>
	);
}
