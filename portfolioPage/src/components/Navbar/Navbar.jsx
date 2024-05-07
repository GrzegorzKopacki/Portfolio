import { useState } from "react";
import { LANGUAGE } from "../../constants/language";
import { BurgerButton } from "../BurgerButton/BurgerButton";
import { SwitchMenu } from "../SwitchMenu/SwitchMenu";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export function Navbar({ language }) {
	const selectedLanguage = LANGUAGE.find((lang) => lang.language === language);
	const scroll = window.scrollY;

	const [navMobileisActive, setNavMobileisActive] = useState(false);

	function handleMobileNav() {
		setNavMobileisActive((prevState) => !prevState);
	}

	return (
		<div className={scroll > 0 ? styles.headerActive : styles.header}>
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
				onClick={() => handleMobileNav()}
			/>
		</div>
	);
}
