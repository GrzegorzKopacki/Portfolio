import styles from "./ProjectsSection.module.css";
import { PROJECTS } from "../../constants/projects";

export function ProjectsSection() {
	return (
		<section class="projects">
			<div class="section-title">
				<p class="section-title-main">Proj</p>
				<span class="section-title-sub">ects</span>
			</div>

			<div class="projects-content">
				{PROJECTS.map((project) => (
					<div key={project.id} class="project-content-card">
						<img src={project.image} />
						<div class="project-info">
							<p class="project-name">{project.title}</p>
						</div>
						<p class="project-description">{project.description}</p>
						<div class="project-technologies">
							<p class="technologies-title">technologies used:</p>
							<ul class="technologies-icons">
								{project.technologies.map((tech, index) => (
									<li key={index}>{tech}</li>
								))}
							</ul>
						</div>
						<div>
							<a href={project.live}>Check Live</a>
							<a href={project.github}>See Code</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
