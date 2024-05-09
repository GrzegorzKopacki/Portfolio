import styles from "./AboutMe.module.css";
import ABOUT from "../../assets/About.gif";

export function AboutMe() {
	return (
		<section id="about" className={styles.about}>
			<div className={styles.sectionTitle}>
				<p className={styles.sectionTitleMain}>Who</p>
				<span className={styles.sectionTitleSub}>Am I?</span>
			</div>
			<div className={styles.aboutContent}>
				<p className={styles.aboutText}>
					Hi there! I am a web developer who is passionate about creating
					user-friendly and visually appealing websites. I have been learning to
					code since November 2022, and I have experience with HTML, CSS,
					JavaScript, React, and TypeScript. I am always eager to learn new
					technologies and improve my skills. I believe that web development is
					a powerfull tool that can be used to create positive change in the
					world. I am excited to use my skills to build websites that make a
					difference. I am currently looking for a job as a frontend developer,
					so if you think I would be a good fit for your team, please don't
					hesitate to reach out. Thank you for your time!
				</p>
				<img src={ABOUT} alt="" />
			</div>
		</section>
	);
}
