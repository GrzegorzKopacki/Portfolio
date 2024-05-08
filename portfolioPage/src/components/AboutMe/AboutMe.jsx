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
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa modi
					sit ipsa, impedit necessitatibus facilis fugiat asperiores animi
					dolorum consequuntur? Nulla minima, placeat praesentium pariatur vitae
					optio unde consequuntur qui!
				</p>
				<img src={ABOUT} alt="" />
			</div>
		</section>
	);
}
