import { About } from "../../views/About/About";
import { Home } from "../../views/Home/Home";
import { MainContent } from "../MainContent/MainContent";
import { Navbar } from "../Navbar/Navbar";

export function Layout() {
	return (
		<>
			<MainContent>
				<Navbar language={"english"} />
				<Home />
				<About />
			</MainContent>
		</>
	);
}
