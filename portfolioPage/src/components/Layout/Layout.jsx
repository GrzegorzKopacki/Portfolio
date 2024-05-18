import { useState } from "react";
import { About } from "../../views/About/About";
import { Home } from "../../views/Home/Home";
import { MainContent } from "../MainContent/MainContent";
import { Navbar } from "../Navbar/Navbar";
import { Skills } from "../../views/Skills/Skills";
import { ProjectsSection } from "../ProjectsSection/ProjectsSection";
import { ContactForm } from "../ContactForm/ContactForm";
import { Footer } from "../../views/Footer/Footer";

export function Layout() {
	const [language, setLanguage] = useState("english");
	const [theme, setTheme] = useState("dark");

	function handleToggleTheme() {
		setTheme(theme === "dark" ? "light" : "dark");
	}

	return (
		<>
			<MainContent dataTheme={theme}>
				<Navbar
					onChange={() => {
						setLanguage(language === "english" ? "polish" : "english");
					}}
					language={language}
					onClick={handleToggleTheme}
					theme={theme}
				/>
				<Home theme={theme} />
				<About language={language} theme={theme} />
				<Skills language={language} />
				<ProjectsSection language={language} />
				<ContactForm language={language} />
				<Footer />
			</MainContent>
		</>
	);
}
