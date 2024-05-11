import { SKILLS } from "../../constants/SkillsData";
import styles from "./SkillsSection.module.css";

export function SkillsSection() {
	return (
		<div id="skills" className={styles.technologiesContainer}>
			<div className={styles.sectionTitle}>
				<p className={styles.sectionTitleMain}>Techn</p>
				<span className={styles.sectionTitleSub}>ologies</span>
			</div>
			<section className={styles.technologiesContent}>
				{SKILLS.map((skill) => (
					<div className={styles.technologiesItem} key={skill.id}>
						<div className={styles.techIcon} style={{ color: skill.color }}>{skill.icon}</div>
                        <p className={styles.technologiesItemTitle}>{skill.name}</p>
					</div>
				))}
			</section>
		</div>
	);
}
