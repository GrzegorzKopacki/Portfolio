import { LANGUAGE } from "../../constants/language";
import { SKILLS } from "../../constants/SkillsData";
import styles from "./SkillsSection.module.css";

export function SkillsSection({ language }) {
	const selectedLanguage = language === "polish" ? LANGUAGE[0] : LANGUAGE[1];
	const skills = selectedLanguage.skills || [];
	return (
		<div id="skills" className={styles.technologiesContainer}>
			{skills.length > 0 && (
				<div className={styles.sectionTitle}>
					<p className={styles.sectionTitleMain}>{skills[0].title}</p>
					<span className={styles.sectionTitleSub}>{skills[0].subtitle}</span>
				</div>
			)}
			<section className={styles.technologiesContent}>
				{SKILLS.map((skill) => (
					<div className={styles.technologiesItem} key={skill.id}>
						<div className={styles.techIcon} style={{ color: skill.color }}>
							{skill.icon}
						</div>
						<p className={styles.technologiesItemTitle}>{skill.name}</p>
					</div>
				))}
			</section>
		</div>
	);
}
