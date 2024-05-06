import { LANGUAGE } from "../../constants/language";

export function Navbar({ language }) {
	const selectedLanguage = LANGUAGE.find((lang) => lang.language === language);

	return (
		<>
			<ul>
				{selectedLanguage &&
					selectedLanguage.navbarItems.map((item, index) => (
						<li key={index}>
							<a href={item.link}>{item.name}</a>
						</li>
					))}
			</ul>
		</>
	);
}
