import Entry from "./Entry.jsx";

export default function Gallery({ searchedPictures }) {
	const entryElements = searchedPictures.map((entry) => {
		return <Entry key={entry.id} {...entry} />
	});

	return <main className="container">{entryElements}</main>;
};