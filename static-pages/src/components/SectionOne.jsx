export default function SectionOne() {
	return (
		<div className="group-1">
			{/* Skills Section */}
			<div className="skills">
				<h3 className="title">Skills</h3>
				<ul className="skills_list description">
					<li>Programming Languages</li>
					<li>Web Development</li>
					<li>Cloud Computing</li>
					<li>Database Technologies</li>
					<li>AI & ML Libraries</li>
					<li>Version Control</li>
					<li>Graphic Design Software</li>
					<li>Other Technologies</li>
					<li>Digital Advertising Platforms</li>
				</ul>
			</div>
			{/* Projects Section */}
			<div className="proj">
				<h3 className="title">Projects</h3>
				<div className="proj_item">
					<h4 className="proj_name">Project 1</h4>
					<p className="description">
						Lorem Ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
				</div>
				<div className="proj_item">
					<h4 className="proj_name">Project 2</h4>
					<p className="description">
						Lorem Ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
				</div>
			</div>
			{/* Education Section */}
			<div className="edu">
				<h3 className="title">Education</h3>
				<div className="edu_item">
					<p className="item_preTitle">December 2022</p>
					<h4 className="item_title">B.A. in Applied Mathematics</h4>
					<p className="item_subTitle">University of California, Berkeley</p>
				</div>
			</div>
		</div>
	)
}