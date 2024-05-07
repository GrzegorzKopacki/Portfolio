import styles from "./BurgerButton.module.css";

export function BurgerButton({ onClick, isActive }) {
	return (
		<button
			onClick={onClick}
			className={isActive ? styles.burgerButton : styles.greenBurgerButton}
		>
			<span></span>
			<span></span>
			<span></span>
		</button>
	);
}
