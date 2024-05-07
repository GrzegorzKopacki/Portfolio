import HERODARK from "../../assets/heroBlack.gif";

export function HomeSite() {
	return (
		<section id="home" class="home">
			<img class="home-img" src={HERODARK} />
			<div class="home-content">
				<h1>Grzegorz Kopacki</h1>
				<span>Frontend Developer</span>
				<div class="home-icons">
					{/* <img src="./images/icons/linkedin.svg" alt="" />
					<img src="./images/icons/GithubIcon.svg" alt="" /> */}
				</div>
			</div>
			<button class="scroll-down-button">
				<div class="scroll-down-circle"></div>
			</button>
		</section>
	);
}
