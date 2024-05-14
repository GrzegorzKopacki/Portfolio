import styles from "./ContactForm.module.css";
export function ContactForm() {
	return (
		<div className={styles.formContainer}>
			<form className={styles.form}>
				<label className={styles.label}>Name</label>
				<input className={styles.input} type="text" name="user_name" />
				<label className={styles.label}>Email</label>
				<input className={styles.input} type="email" name="user_email" />
				<label className={styles.label}>Message</label>
				<textarea className={styles.textarea} name="message" />
				<input className={styles.submit} type="submit" value="Send" />
			</form>
		</div>
	);
}
