import { useState } from "react";
import { LANGUAGE } from "../../constants/language";
import { BurgerButton } from "../BurgerButton/BurgerButton";
import { SwitchMenu } from "../SwitchMenu/SwitchMenu";
import styles from "./Navbar.module.css";

export function Navbar({ language }) {
	const selectedLanguage = LANGUAGE.find((lang) => lang.language === language);

	const [navMobileisActive, setNavMobileisActive] = useState(false);

	function handleMobileNav() {
		setNavMobileisActive((prevState) => !prevState);
	}

	// function handleLinkClick(event) {
	// 	event.preventDefault();
	// 	if (window.innerWidth <= 1000) {
	// 		setNavMobileisActive(false);
	// 	}
	// }

	return (
		<div className={styles.header}>
			<SwitchMenu />
			<ul className={navMobileisActive ? styles.menuActive : styles.menu}>
				{selectedLanguage &&
					selectedLanguage.navbarItems.map((item, index) => (
						<li className={styles.menuLink} key={index}>
							<a href={item.link}>{item.name}</a>
						</li>
					))}
			</ul>
			<BurgerButton
				isActive={navMobileisActive ? true : false}
				onClick={handleMobileNav}
			/>
		</div>
	);
}
