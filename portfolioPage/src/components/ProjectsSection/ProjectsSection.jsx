import styles from "./ProjectsSection.module.css";
import { PROJECTS } from "../../constants/projects";
import { LANGUAGE } from "../../constants/language";

export function ProjectsSection({ language }) {
	const selectedLanguage = LANGUAGE.find((lang) => lang.language === language);
	return (
		<section id="projects" className={styles.projects}>
			{selectedLanguage.projectsHeader.map((titleLang, index) => (
				<div key={index} className={styles.sectionTitle}>
					<p className={styles.sectionTitleMain}>{titleLang.title}</p>
					<span className={styles.sectionTitleSub}>{titleLang.subtitle}</span>
				</div>
			))}

			<div className={styles.projectsContent}>
				{PROJECTS.map((project) => (
					<div key={project.id} className={styles.projectContentCard}>
						<div className={styles.imageContainer}>
							<img src={project.image} className={styles.projectImage} />
						</div>
						<div className={styles.projectInfo}>
							<p className={styles.projectName}>{project.title}</p>
						</div>

						<p className={styles.projectDescription}>
							{language === "english"
								? project.description
								: project.descriptionPL}
						</p>

						<div className={styles.projectTechnologies}>
							<ul className={styles.technologiesIcons}>
								{project.technologies.map((tech, index) => (
									<li key={index}>{tech}</li>
								))}
							</ul>
						</div>
						{selectedLanguage.projects.map((linkLang, index) => (
							<div className={styles.linkContainer} key={index}>
								<a href={project.live}>{linkLang.live}</a>
								<a href={project.github}>{linkLang.github}</a>
							</div>
						))}
					</div>
				))}
			</div>
		</section>
	);
}
