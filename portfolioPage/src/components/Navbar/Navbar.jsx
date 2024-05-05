import { LANGUAGE } from "../../constants/language";
import { NavLink } from "react-router-dom";

export function Navbar({ language }) {
	const selectedLanguage = LANGUAGE.find((lang) => lang.language === language);

	return (
		<>
			<ul>
				{selectedLanguage &&
					selectedLanguage.navbarItems.map((item, index) => (
						<li key={index}>
							<NavLink to={item.link}>{item.name}</NavLink>
						</li>
					))}
			</ul>
		</>
	);
}
