import Entry from "./Entry.jsx";
import { AnimatePresence, motion } from "motion/react";

export default function Gallery({ searchedPictures }) {
	const entryElements = searchedPictures.map((entry, i) => {
		return (
			<AnimatePresence>
				<motion.div 
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition= {{
						delay: i * 0.3,
					}}
					key={entry.id}
				>
					<Entry key={entry.id} {...entry} />
				</motion.div>
			</AnimatePresence>
			)
	});

	return <main className="container">{entryElements}</main>;
};