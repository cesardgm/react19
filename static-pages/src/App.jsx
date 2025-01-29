import TopSection from "./components/TopSection.jsx";
import SectionOne from "./components/SectionOne.jsx";
import SectionTwo from "./components/SectionTwo.jsx";
import BottomSection from "./components/BottomSection.jsx";

export default function App() {
	return (
		<div className="container">
			<TopSection />
			<SectionOne />
			<SectionTwo />
			<hr />
			<BottomSection />
		</div>
	)
}