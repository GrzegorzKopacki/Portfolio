import { useState } from "react";
import styles from "./SwitchMenu.module.css";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { LANGUAGE } from "../../constants/language";

export function SwitchMenu({ onChange }) {
	const [darkMode, setDarkMode] = useState(true);

	return (
		<div className={styles.container}>
			<button className={styles.SwitchButton}>
				{darkMode ? (
					<BsMoonStarsFill className={styles.darkModeIcon} />
				) : (
					<FaSun />
				)}
			</button>
			<select onChange={onChange} className={styles.languageSelector}>
				<option value={LANGUAGE.language === "polish"}>Polski</option>
				<option value={LANGUAGE.language === "english"}>English</option>
			</select>
		</div>
	);
}
