export default function SearchFrom({ searchTerm, onInputChange, onSearchSubmit }) {
	return (
		<form onSubmit={onSearchSubmit}>
			<label htmlFor="search">Search: </label>
			<input
				id="search"
				type="text"
				value={searchTerm}
				onChange={onInputChange}
			/>

			<p>Searching for <strong> {searchTerm} </strong> </p>

			<button type="submit" disabled={!searchTerm}>Submit</button>
		</form>
	)
};