import { useState } from "react";
import styles from "./SwitchMenu.module.css";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import UK from "../../assets/uk.png";

export function SwitchMenu() {
	const [darkMode, setDarkMode] = useState(true);
	return (
		<div>
			<button>{darkMode ? <BsMoonStarsFill /> : <FaSun />}</button>
			<button>
				<img className={styles.ukFlag} src={UK} />
			</button>
		</div>
	);
}
