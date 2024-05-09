import { SKILLS } from "../../constants/SkillsData";

export function SkillsSection() {
	return (
		<div className="section technologies-container">
			<div className="section-title">
				<p className="section-title-main">Techn</p>
				<span className="section-title-sub">ologies</span>
			</div>
			<section className="technologies-content">
				{SKILLS.map((skill) => (
					<div key={skill.id}>
						<div style={{ color: skill.color }}>{skill.icon}</div>
						<p>{skill.name}</p>
					</div>
				))}
			</section>
		</div>
	);
}
