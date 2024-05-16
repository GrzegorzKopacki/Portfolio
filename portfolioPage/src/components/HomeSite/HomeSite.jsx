import HERODARK from "../../assets/heroBlack.gif";
import HEROWHITE from "../../assets/heroWhite.gif";
import GITHUBICON from "../../assets/GithubIcon.svg";
import LINKEDINICON from "../../assets/linkedin.svg";
import styles from "./HomeSite.module.css";

export function HomeSite({ theme }) {
	return (
		<section id="home" className={styles.home}>
			<img className={styles.homeImg} src={theme === "dark" ? HERODARK : HEROWHITE} />
			<div className={styles.homeContent}>
				<h1>Grzegorz Kopacki</h1>
				<span>Frontend Developer</span>
				<div className={styles.homeIcons}>
					<img src={GITHUBICON} />
					<img src={LINKEDINICON} />
				</div>
			</div>
			<button className={styles.scrollDownButton}>
				<div className={styles.scrollDownCircle}></div>
			</button>
		</section>
	);
}
