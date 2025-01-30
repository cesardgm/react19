export default function SectionOne() {
	return (
		<div className="group-1">
			{/* Skills 1 Section */}
			<div className="skills">
				<h3 className="title">Frontend Tech</h3>
				<div className="list_container">
					<ul className="skills_list description">
						<li>React</li>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>TypeScript</li>
					</ul>
					<ul className="skills_list description">
						<li>Vite</li>
						<li>Next.js</li>
						<li>Express.js</li>
						<li>Flask</li>
						<li>FastAPI</li>
					</ul>
				</div>
			</div>
			{/* Skills 2 Section */}
			<div className="skills">
				<h3 className="title">Backend Tech</h3>
				<div className="list_container">
				<ul className="skills_list description">
					<li>Python</li>
					<li>Julia</li>
					<li>R</li>
					<li>MySQL</li>
					<li>PostgreSQL</li>
					<li>Redis</li>
					<li>MongoDB</li>
					<li>Docker</li>
					<li>NGINX</li>
				</ul>
				<ul className="skills_list description">
					<li>Bash</li>
					<li>AWS EC2</li>
					<li>AWS Route 53</li>
					<li>AWS Lambda</li>
					<li>AWS API Gateway</li>
					<li>AWS DynamoDB</li>
					<li>AWS S3</li>
					<li>Terraform</li>
					<li>Git</li>
				</ul>
				</div>
			</div>
			{/* Projects Section */}
			<div className="proj">
				<h3 className="title">Projects</h3>
				<div className="proj_item">
					<h4 className="proj_name">CureGenie, Inc.</h4>
					<ul className="proj_list description">
						<li>Automated clinicial workflows with GPT-4.</li>
						<li>Frontend: React, Backend: Flask-RESTX, MySQL.</li>
						<li>Deployed on AWS EC2 with a monolithic architecture.</li>
						<li>Integrated Gmail client for staff-patient interaction.</li>
					</ul>
				</div>
				<div className="proj_item">
					<h4 className="proj_name">CureGenie, CalHacks '23</h4>
					<ul className="proj_list description">
						<li>Developed web app for personalized meal plans and workout routines.</li>
						<li>Frontend: Streamlit, Backend: Python.</li>
						<li>Won top prize at 2023 AI & LLM hackathon (2,000+ participants).</li>
						<li>Secured $50,000 seed funding from Berkeley SkyDeck.</li>
					</ul>
				</div>
				<div className="proj_item">
					<h4 className="proj_name">Mutual Fund Investing Simulator</h4>
					<ul className="proj_list description">
						<li>Build a data-driven investments simulator with R and RShiny.</li>
						<li>Deployed on ShinyApps.io for exploring mutual fund strategies.</li>
					</ul>
				</div>
				<div className="proj_item">
					<h4 className="proj_name">Crazy Days and Nights Clone</h4>
					<ul className="proj_list description">
						<li>
							Developed a data-centric web service cloned from "crazydaysandnights.net,"
							created entirely with GPT-3.5 Turbo.
						</li>
						<li>Tech stack: Flask (backend), HTML/CSS/JS (frontend), MySQL (database).</li>
						<li>Hosted on AWS EC2 with data replication and automated daily updates via CRON and Beautiful Soup.</li>
						<li>Implemented HTTPS, automated backups, and domain management via AWS Route 53.</li>
						<li>Analyzed celebrity gender breakdown and a 2022 lawsuit, live at "crazydaysandnightslawsuit.net" until 2023.</li>
					</ul>
				</div>
			</div>
			{/* Education Section */}
			<div className="edu">
				<h3 className="title">Education</h3>
				<div className="edu_item">
					<p className="item_preTitle">2022</p>
					<h4 className="item_title">B.A. in Applied Mathematics</h4>
					<p className="item_subTitle">University of California, Berkeley</p>
				</div>
			</div>
		</div>
	)
}