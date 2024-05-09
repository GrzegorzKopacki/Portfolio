import { useState } from "react";
import { About } from "../../views/About/About";
import { Home } from "../../views/Home/Home";
import { MainContent } from "../MainContent/MainContent";
import { Navbar } from "../Navbar/Navbar";
import { Skills } from "../../views/Skills/Skills";

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
				<Skills />
			</MainContent>
		</>
	);
}
