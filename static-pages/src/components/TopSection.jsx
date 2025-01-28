export default function TopSection() {
	return (
		<div className="profile">
			<div className="profile_container">
				<div className="profile_profileImg">
					<img 
						src="src/assets/profileImage.png"
						alt="profile picture"
					/>
				</div>
				<div>
					<h1 className="profile_name">
						<span className="profile_name_firstName">Cesar</span>
						<span className="profile_name_lastName">Gonzalez</span>
					</h1>
					<p className="profile_title">Developer</p>
					<p className="description">
						Lorem Ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
					<a
						className="downloadButton" 
						href="src/assets/cv.pdf"
						download="resume.pdf"
					>Download
					</a>
				</div>
			</div>
		</div>
	)
}