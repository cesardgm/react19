import Entry from "./components/Entry.jsx";
import data from "./gallery.js";

export default function App() {

	const entryElements = data.map((entry) => {
		return(
			<Entry 
				key={entry.id}
				{...entry}
			/>
		)
	})

	return (
		<>
			<main className="container">
				{entryElements}
			</main>
		</>
	)
};