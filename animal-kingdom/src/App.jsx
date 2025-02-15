import Entry 		from "./components/Entry.jsx";
import SearchForm 	from "./components/SearchForm.jsx";
import Spinner 		from "./components/Spinner.jsx";
import Gallery 		from "./components/Gallery.jsx"
import allPictures 	from "./gallery.js";
import { useState, useEffect } from 'react';

export default function App() {

	const [searchTerm, setSearchTerm] = useState("");
	const [searchedPictures, setSearchedPictures] = useState([]);
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)

	function getAsyncPictures() {
		return new Promise(function(resolve) {
			setTimeout(function() {
				resolve({ data: { pictures: allPictures } });
			}, 1000);
		});
	};

	function fetchData() {
		setIsLoading(true);

		getAsyncPictures().then(function(result) {
			setSearchedPictures(result.data.pictures);
			setIsLoading(false);
		}).catch(function() {
			setIsError(true);
		});
	};

	useEffect(fetchData, []);

	function handleInputChange(event) {
		setSearchTerm(event.target.value);
	};

	function handleSearchSubmit(event) {
		event.preventDefault();

		const filteredPictures = allPictures.filter(function (entry) {
			return entry.title.toLowerCase().includes(searchTerm.toLowerCase());
		});

		setSearchedPictures(filteredPictures);
	};

	return (
		<>
			<SearchForm searchTerm={searchTerm} onInputChange={handleInputChange} onSearchSubmit={handleSearchSubmit} />
			{	isError === true ? <p>Something went wrong ...</p> : null	}
			{	isLoading === true ? <Spinner/> : <Gallery searchedPictures={searchedPictures} />	}
		</>
	)
};