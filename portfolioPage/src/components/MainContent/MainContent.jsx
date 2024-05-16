import styles from "./MainContent.module.css";

export function MainContent({ children, dataTheme }) {
	return (
		<div data-theme={dataTheme} className={styles.mainContent}>
			{children}
		</div>
	);
}
