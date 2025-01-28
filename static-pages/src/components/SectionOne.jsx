export default function SectionOne() {
	return (
		<div className="group-1">
			<div className="skills">
				<h3 className="title">Technologies</h3>
				<ul className="skills_list description">
					<li>Python</li>
					<li>React</li>
				</ul>
			</div>
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

			<div className="edu">
				<h3 className="title">Education</h3>
				<div className="edu_item">
					<p class="item_preTitle">December 2022</p>
					<h4 className="item_title">B.A. in Applied Mathematics</h4>
					<p className="item_subTitle">University of California, Berkeley</p>
				</div>
			</div>
		</div>
	)
}