import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { AnimatePresence, motion } from "motion/react";

export default function SearchFrom({ searchedPictures, searchTerm, onInputChange, onSearchSubmit, isOpen, onInputClick }) {

	const filteredTitles = searchedPictures
	  .filter(function(picture) {
	    return picture.title.toLowerCase().includes(searchTerm.toLowerCase());
	  })
	  .map(function(picture) {
	    return { title: picture.title, id: picture.id };
	  })
	  .slice(0, 3);

	// If the filtered result is empty, return an array with the default object
	const result = filteredTitles.length === 0
		? [{ title: "No Matches Found", id: -1 }]
		: filteredTitles

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
							<motion.div 
								className="dropdown-container"
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
							>
								{ result.map(function(data, i) {
									return (
										<motion.div 
											className="dropdown-item"
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition= {{
												delay: i * 0.1,
											}}
											exit={{ opacity: 0, y: -20 }}
											key={data.id}
										>
											<span onClick={(event) => onInputClick(event,data.title)}>{data.title}</span>
										</motion.div>)
									})
								}
							</motion.div>) : null
				}
			</AnimatePresence>
		</div>
	)
};