// import { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import styles from "./ContactForm.module.css";
// export function ContactForm() {
// 	const form = useRef();

// 	const sendEmail = (e) => {
// 		e.preventDefault();

// 		emailjs
// 			.sendForm("service_l4ncj4n", "template_dxuchjx", form.current, {
// 				publicKey: "m1i-dZnjq6wOmWUqQ",
// 			})
// 			.then(
// 				() => {
// 					console.log("SUCCESS!");
// 					e.target.reset();
// 				},
// 				(error) => {
// 					console.log("FAILED...", error.text);
// 				}
// 			);
// 	};
// 	return (
// 		<div className={styles.formContainer}>
// 			<form className={styles.form} ref={form} onSubmit={sendEmail}>
// 				<label className={styles.label}>Name</label>
// 				<input className={styles.input} type="text" name="user_name" />
// 				<label className={styles.label}>Email</label>
// 				<input className={styles.input} type="email" name="user_email" />
// 				<label className={styles.label}>Message</label>
// 				<textarea className={styles.textarea} name="message" />
// 				<input className={styles.submit} type="submit" value="Send" />
// 			</form>
// 		</div>
// 	);
// }

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.css";

export function ContactForm() {
	const form = useRef();
	const [errors, setErrors] = useState({});

	const validateForm = () => {
		const errors = {};
		if (!form.current.user_name.value.trim()) {
			errors.name = "Name is required";
		}
		if (!form.current.user_email.value.trim()) {
			errors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(form.current.user_email.value)) {
			errors.email = "Invalid email address";
		}
		if (!form.current.message.value.trim()) {
			errors.message = "Message is required";
		}
		return errors;
	};

	const sendEmail = (e) => {
		e.preventDefault();
		const validationErrors = validateForm();
		if (Object.keys(validationErrors).length === 0) {
			emailjs
				.sendForm("service_l4ncj4n", "template_dxuchjx", form.current, {
					publicKey: "m1i-dZnjq6wOmWUqQ",
				})
				.then(
					() => {
						console.log("SUCCESS!");
						e.target.reset();
						setErrors({});
					},
					(error) => {
						console.log("FAILED...", error.text);
					}
				);
		} else {
			setErrors(validationErrors);
		}
	};

	return (
		<div className={styles.formContainer}>
			<form className={styles.form} ref={form} onSubmit={sendEmail}>
				<label className={styles.label}>Name</label>
				<input className={styles.input} type="text" name="user_name" />
				{errors.name && <div className={styles.error}>{errors.name}</div>}
				<label className={styles.label}>Email</label>
				<input className={styles.input} type="email" name="user_email" />
				{errors.email && <div className={styles.error}>{errors.email}</div>}
				<label className={styles.label}>Message</label>
				<textarea className={styles.textarea} name="message" />
				{errors.message && <div className={styles.error}>{errors.message}</div>}
				<input className={styles.submit} type="submit" value="Send" />
			</form>
		</div>
	);
}
