import Entry from "./components/Entry.jsx";
import data from "./gallery.js";
import SearchForm from "./components/SearchForm.jsx";
import { useState } from 'react';

export default function App() {

	const [searchTerm, setSearchTerm] = useState("");

	function handleInputChange(event) {
		setSearchTerm(event.target.value);
	};

	function handleSearchSubmit(event) {
		console.log(searchTerm)
		event.preventDefault();
	};

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
			<SearchForm searchTerm={searchTerm} onInputChange={handleInputChange} onSearchSubmit={handleSearchSubmit} />
			<main className="container">
				{entryElements}
			</main>
		</>
	)
};