import { useRef, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { AnimatePresence, motion } from "motion/react";

export default function SearchFrom({ searchedPictures, searchTerm, onInputChange, onSearchSubmit, isOpen }) {

//const containerRef = useRef();

const filteredTitles = searchedPictures
  .filter(function(picture) {
    return picture.title.toLowerCase().includes(searchTerm.toLowerCase());
  })
  .map(function(picture) {
    return picture.title;
  })
  .slice(0, 3);

	return (
		<div className="search-dropdown-container">
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
			<AnimatePresence>
				{
					isOpen === true ? (
							<motion.div className="dropdown-container">
								{ filteredTitles }
							</motion.div>) : null
				}
			</AnimatePresence>
		</div>
	)
};