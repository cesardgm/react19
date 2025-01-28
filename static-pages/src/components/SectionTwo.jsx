import { FaMusic, FaBook, FaMap } from "react-icons/fa";

export default function SectionTwo() {
	return (
		<div className="group-2">
			{/* Experience Section */}
			<div className="exp">
				<h3 className="title">Experience</h3>
				<div className="exp_item">
					<p className="item_preTitle">2019 - present</p>
					<h4 className="item_title">CureGenie, Inc.</h4>
					<p className="item_subTitle">Developer</p>
					<p className="description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
				</div>
				<div className="exp_item">
					<p className="item_preTitle">2015 - 2019</p>
					<h4 className="item_title">Some Other Place, Inc.</h4>
					<p className="item_subTitle">Developer</p>
					<p className="description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
				</div>
			</div>

			{/* Awards Section */}
			<div className="awards">
				<h3 className="title">Awards</h3>
				<div className="awards_item">
					<p className="item_preTitle">2019</p>
					<h4 className="item_title">Good Job Award</h4>
					<p className="description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
				</div>
			</div>

			{/* Interests Section */}
			<div className="interests">
				<h3 className="title">Interests</h3>
				<div className="interests_items">
					<div className="interest_item">
						<FaMusic size={48} />
						<p className="interest_item_label">Music</p>
					</div>
					<div className="interest_item">
						<FaBook size={48} />
						<p className="interest_item_label">Book</p>
					</div>
					<div className="interest_item">
						<FaMap size={48} />
						<p className="interest_item_label">Map</p>
					</div>
				</div>
			</div>
		</div>
	);
}