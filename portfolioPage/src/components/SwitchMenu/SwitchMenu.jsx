import { useState } from "react";
import styles from "./SwitchMenu.module.css";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { LANGUAGE } from "../../constants/language";

export function SwitchMenu({ onChange, onClick }) {
	return (
		<div className={styles.container}>
			<button onClick={onClick} className={styles.SwitchButton}>
				<BsMoonStarsFill className={styles.darkModeIcon} />
			</button>
			<select onChange={onChange} className={styles.languageSelector}>
				<option value={LANGUAGE.language === "english"}>English</option>
				<option value={LANGUAGE.language === "polish"}>Polski</option>
			</select>
		</div>
	);
}
