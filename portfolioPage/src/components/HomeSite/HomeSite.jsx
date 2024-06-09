import HERODARK from "../../assets/heroBlack.gif";
import HEROWHITE from "../../assets/heroWhite.gif";
import GITHUBICON from "../../assets/GithubIcon.svg";
import LINKEDINICON from "../../assets/linkedin.svg";
import styles from "./HomeSite.module.css";

export function HomeSite({ theme }) {
	return (
		<section id="home" className={styles.home}>
			<img
				className={styles.homeImg}
				src={theme === "dark" ? HERODARK : HEROWHITE}
			/>
			<div className={styles.homeContent}>
				<h1>Grzegorz Kopacki</h1>
				<span>Frontend Developer</span>
				<div className={styles.homeIcons}>
					<a
						rel="noopener"
						target="_blank"
						href="https://github.com/GrzegorzKopacki"
					>
						<img src={GITHUBICON} />
					</a>
					<a
						rel="noopener"
						target="_blank"
						href="https://www.linkedin.com/in/grzegorz-kopacki-014977115/"
					>
						<img src={LINKEDINICON} />
					</a>
				</div>
			</div>
			<button className={styles.scrollDownButton}>
				<div className={styles.scrollDownCircle}></div>
			</button>
		</section>
	);
}
