export default function TopSection() {
	return (
		<div className="container">
			<div className="profile">
				<div className="profile_container">
					<div className="profile_profileImg">
						<img 
							src="src/assets/profileImage.png"
							alt="profile picture"
						/>
					</div>
					<div>
						<h1 className="profile_name">Cesar Gonzalez</h1>
						<p className="profile_title">Developer</p>
						<p className="description">
							Lorem Ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua.
						</p>
						<a
							className="download" 
							href="src/assets/cv.pdf"
							download="resume.pdf"
						>Download Button
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}