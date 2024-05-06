import { LANGUAGE } from "../../constants/language";
import { BurgerButton } from "../BurgerButton/BurgerButton";
import { SwitchMenu } from "../SwitchMenu/SwitchMenu";
import styles from "./Navbar.module.css";

export function Navbar({ language }) {
	const selectedLanguage = LANGUAGE.find((lang) => lang.language === language);

	return (
		<div className={styles.header}>
			<SwitchMenu />
			<ul className={styles.menu}>
				{selectedLanguage &&
					selectedLanguage.navbarItems.map((item, index) => (
						<li className={styles.menuLink} key={index}>
							<a href={item.link}>{item.name}</a>
						</li>
					))}
			</ul>
			<BurgerButton />
		</div>
	);
}
