import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.css";
export function ContactForm() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_l4ncj4n", "template_dxuchjx", form.current, {
				publicKey: "m1i-dZnjq6wOmWUqQ",
			})
			.then(
				() => {
					console.log("SUCCESS!");
					e.target.reset();
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
	};
	return (
		<div className={styles.formContainer}>
			<form className={styles.form} ref={form} onSubmit={sendEmail}>
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
