export default function SectionTwo() {
	const WINNER_LINK = "https://devpost.com/software/cure-genie";
	const EVENT_LINK = "https://medium.com/@berkeleyskydeck_15634/finding-inspiration-at-the-largest-generative-ai-llm-hackathon-cf29a09e8479";

	return (
		<div className="group-2">
			{/* Experience Section */}
			<div className="exp">
				<h3 className="title">Experience</h3>
					<div className="exp_item">
					  <p className="item_preTitle">June 2023 - present</p>
					  <h4 className="item_title">CureGenie, Inc.</h4>
					  <p className="item_subTitle">Developer</p>
					  <ul className="exp_list description">
					    <li>
					      Automated clinician workflows using generative AI, 
					      enhancing efficiency and accuracy in patient care 
					      processes across Boston and California clinics.
					    </li>
					    <li>
					      Led the development and deployment of CureGenie's 
					      infrastructure, business logic, security, and user 
					      interface, ensuring a seamless and secure user experience.
					    </li>
					    <li>
						    <a 
						    href="https://www.youtube.com/watch?v=-J-ZOK0PKs4&ab_channel=HourLoops4124" 
						    target="_blank" 
						    rel="noopener noreferrer"
						    className="demo_link"
						  	>
						    🔗 Watch product demo
						  	</a>
					    </li>
					  </ul>
					</div>
				<div className="exp_item">
					<p className="item_preTitle">Aug 2015 - June 2021</p>
					<h4 className="item_title">One Redwood City</h4>
					<p className="item_subTitle">Cofounder</p>
					<ul className="exp_list description">
						<li>
							Advocated for tenant protections, affordable housing, and 
							increased housing supply, contributing to community service
							and policy advocacy. Notably led the organization and advocacy
							for AB 1482 in 2019 at the state level and piloted the Safe 
							Parking program fro RV dwellers in Redwood City.
						</li>
						<li>
							Conducted research and proposed policies to local policy makers,
							showcasing the ability to translate complex data into actionable
							insights and recommendations.
						</li>
						<li>
							Faciliated $300,000 in rental assistance during 2020-2021 lockdowns
							in partnership with and spearheaded by the Legal Aid Society of San
							Mateo County, supported by a generous donation from the Chan-Zuckerberg
							Initiative.
						</li>
					</ul>
				</div>
				<div className="exp_item">
					<p className="item_preTitle">Oct 2019 - Nov 2020</p>
					<h4 className="item_title">Various Political Campaigns</h4>
					<p className="item_subTitle">Independent Campaign Consultant</p>
					<ul className="exp_list description">
						<li>
							Developed and implemented comprehensive campaign strategies for multiple
							political candidates, demonstrating expertise in data analysis, digital
							marketing, and grassroots organizing.
						</li>
						<li>
							Leveraged advanced data analytics to refine campaign strategies, achieving
							significant outreach and engagement in competitive political landscapes.
						</li>
						<li>
							Collaborated with San Mateo County figures such as Amourence Lee, Chris Rasmussen, 
							and	Lissette Garnica-Espinoza.
						</li>
					</ul>
				</div>
				<div className="exp_item">
					<p className="item_preTitle">Jan 2018 - Jan 2019</p>
					<h4 className="item_title">Campaign Manager</h4>
					<p className="item_subTitle">Diana Reddy for City Council 2018</p>
					<ul className="exp_list description">
						<li>
							Ensured legal compiance with the City of Redwood City, County of San Mateo, and State
							of California regulations.
						</li>
						<li>
							Managed fundraising campaigns and events, successfully raising over $60,000 for an
							at-large election.
						</li>
						<li>
							Directed a volunteer team of 30+, showcasing strong leadership and organizational skills.
						</li>
						<li>
							Utilized data analysis for targeted supporter engagement, contributing to a successful
							election outcome through strategic planning and execution.
						</li>
					</ul>
				</div>
			</div>

			{/* Awards Section */}
			<div className="awards">
				<h3 className="title">Awards</h3>
				<div className="awards_item">
					<p className="item_preTitle">2023</p>
					<h4 className="item_title">CalHacks '23</h4>
					<p className="awards_content description">
						<a href={WINNER_LINK} className="articleLink">Winner</a> of <a href={EVENT_LINK} className="articleLink">CallHacks' June 2023</a> and secured $50,000 from Berkely SkyDeck.
					</p>
				</div>
			</div>
		</div>
	);
}