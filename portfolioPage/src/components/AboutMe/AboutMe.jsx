import styles from "./AboutMe.module.css";
import ABOUT from "../../assets/About.gif";
import { LANGUAGE } from "../../constants/language";

export function AboutMe({ language }) {
	const selectedLanguage = LANGUAGE.find((lang) => lang.language === language);
	return (
		<section id="about" className={styles.about}>
			{selectedLanguage.about.map((item, index) => (
				<div key={index}>
					<div className={styles.sectionTitle}>
						<p className={styles.sectionTitleMain}>{item.title}</p>
						<span className={styles.sectionTitleSub}>{item.subtitle}</span>
					</div>
					<div className={styles.aboutContent}>
						<p className={styles.aboutText}>{item.description}</p>
						<img src={ABOUT} alt="" />
					</div>
				</div>
			))}
		</section>
	);
}
