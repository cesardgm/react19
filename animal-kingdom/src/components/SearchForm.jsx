import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchFrom({ searchTerm, onInputChange, onSearchSubmit }) {
	return (
		<form onSubmit={onSearchSubmit} className="search-form-container">
			<input
				id="search"
				type="text"
				value={searchTerm}
				onChange={onInputChange}
				className="search-input"
				placeholder="e.g. Albatross"
			/>
			<button type="submit" disabled={!searchTerm} className="search-button"><FaMagnifyingGlass/></button>
		</form>
	)
};