import styles from "./ProjectsSection.module.css";
import { PROJECTS } from "../../constants/projects";
import { LANGUAGE } from "../../constants/language";

export function ProjectsSection({ language }) {
	const selectedLanguage = LANGUAGE.find((lang) => lang.language === language);
	return (
		<section id="projects" className={styles.projects}>
			<div className={styles.sectionTitle}>
				<p className={styles.sectionTitleMain}>Proj</p>
				<span className={styles.sectionTitleSub}>ects</span>
			</div>

			<div className={styles.projectsContent}>
				{PROJECTS.map((project) => (
					<div key={project.id} className={styles.projectContentCard}>
						<div className={styles.imageContainer}>
							<img src={project.image} className={styles.projectImage} />
						</div>
						<div className={styles.projectInfo}>
							<p className={styles.projectName}>{project.title}</p>
						</div>
						{selectedLanguage.projects.map((projectLang, index) => (
							<p key={index} className={styles.projectDescription}>
								{projectLang.description}
							</p>
						))}

						<div className={styles.projectTechnologies}>
							<ul className={styles.technologiesIcons}>
								{project.technologies.map((tech, index) => (
									<li key={index}>{tech}</li>
								))}
							</ul>
						</div>
						<div className={styles.linkContainer}>
							<a href={project.live}>Check live</a>
							<a href={project.github}>See code</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
