import { useState } from "react";
import { About } from "../../views/About/About";
import { Home } from "../../views/Home/Home";
import { MainContent } from "../MainContent/MainContent";
import { Navbar } from "../Navbar/Navbar";
import { Skills } from "../../views/Skills/Skills";
import { ProjectsSection } from "../ProjectsSection/ProjectsSection";
import { ContactForm } from "../ContactForm/ContactForm";

export function Layout() {
	const [language, setLanguage] = useState("english");
	return (
		<>
			<MainContent>
				<Navbar
					onChange={() => {
						setLanguage(language === "english" ? "polish" : "english");
					}}
					language={language}
				/>
				<Home />
				<About />
				<Skills language={language} />
				<ProjectsSection language={language} />
				<ContactForm />
			</MainContent>
		</>
	);
}
