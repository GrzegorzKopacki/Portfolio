import styles from "./ProjectsSection.module.css";
import { PROJECTS } from "../../constants/projects";
import { LANGUAGE } from "../../constants/language";
import  TEST  from "../../assets/test.jpg";

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
						<img src={project.image} />
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
						<div>
							<a href={project.live}>Check live</a>
							<a href={project.github}>See code</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
