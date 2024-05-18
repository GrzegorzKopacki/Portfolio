import { useState } from "react";
import styles from "./SwitchMenu.module.css";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { LANGUAGE } from "../../constants/language";

export function SwitchMenu({ onChange, onClick, theme, language }) {
	return (
		<div className={styles.container}>
			<button onClick={onClick} className={styles.SwitchButton}>
				{theme === "dark" ? (
					<BsMoonStarsFill className={styles.darkModeIcon} />
				) : (
					<FaSun className={styles.darkModeIcon} />
				)}
			</button>
			<select
				onChange={onChange}
				className={styles.languageSelector}
				value={language}
			>
				<option value="english">English</option>
				<option value="polish">Polski</option>
			</select>
		</div>
	);
}
