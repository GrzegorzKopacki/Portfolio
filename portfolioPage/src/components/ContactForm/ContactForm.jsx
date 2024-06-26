import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.css";
import { LANGUAGE } from "../../constants/language";

export function ContactForm({ language }) {
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

	const selectedLanguage = LANGUAGE.find((lang) => lang.language === language);

	return (
		<div id="contact" className={styles.formContainer}>
			{selectedLanguage.contact.map((titleLang, index) => (
				<div key={index} className={styles.sectionTitle}>
					<p className={styles.sectionTitleMain}>{titleLang.title}</p>
					<span className={styles.sectionTitleSub}>{titleLang.subtitle}</span>
				</div>
			))}
			<form className={styles.form} ref={form} onSubmit={sendEmail}>
				<label className={styles.label}>
					{language === "english" ? "Name :" : "Twoje imię :"}
				</label>
				<input className={styles.input} type="text" name="user_name" />
				{errors.name && (
					<div className={styles.error}>
						{language === "english" ? errors.name : "Twoje imię jest wymagane"}
					</div>
				)}
				<label className={styles.label}>
					{" "}
					{language === "english" ? "Email :" : "Twój email :"}
				</label>
				<input className={styles.input} type="email" name="user_email" />
				{errors.email && (
					<div className={styles.error}>
						{language === "english" ? errors.email : "Twój email jest wymagany"}
					</div>
				)}
				<label className={styles.label}>
					{language === "english" ? "Message :" : "Twoja wiadomość :"}
				</label>
				<textarea className={styles.textarea} name="message" />
				{errors.message && (
					<div className={styles.error}>
						{language === "english"
							? errors.message
							: "Twoja wiadomość jest wymagana"}
					</div>
				)}
				<input
					className={styles.submit}
					type="submit"
					value={language === "english" ? "send" : "prześlij"}
				/>
			</form>
		</div>
	);
}
