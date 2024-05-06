import { LANGUAGE } from "../../constants/language";
import { BurgerButton } from "../BurgerButton/BurgerButton";
import { SwitchMenu } from "../SwitchMenu/SwitchMenu";

export function Navbar({ language }) {
	const selectedLanguage = LANGUAGE.find((lang) => lang.language === language);

	return (
		<div>
			<SwitchMenu />

			<ul>
				{selectedLanguage &&
					selectedLanguage.navbarItems.map((item, index) => (
						<li key={index}>
							<a href={item.link}>{item.name}</a>
						</li>
					))}
			</ul>
			<BurgerButton />
		</div>
	);
}
