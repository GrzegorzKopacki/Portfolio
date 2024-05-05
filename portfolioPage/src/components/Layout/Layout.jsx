import { MainContent } from "../MainContent/MainContent";
import { Navbar } from "../Navbar/Navbar";

export function Layout() {
	return (
		<>
			<MainContent>
				<Navbar language={"polish"} />
			</MainContent>
		</>
	);
}
