import styles from "./FooterSection.module.css";

export function FooterSection() {
	return (
		<footer className={styles.footer}>
			Copyright &copy; 2024{" "}
			<span className={styles.myname}>Grzegorz Kopacki</span> All rights
			reserved.
		</footer>
	);
}
