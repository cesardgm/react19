export default function TopSection() {
	return (
		<div className="group-0">
			<div className="profile_container">
				<div className="profile_image_container">
					<img
						className="profile_image" 
						src="src/assets/profileImage.png"
						alt="profile picture"
					/>
				</div>
				<div className="profile_content_container">
					<h1 className="profile_name">
						<span className="profile_name_firstName">Cesar</span>
						<span className="profile_name_lastName">Gonzalez</span>
					</h1>
					<p className="profile_title">Developer</p>
					<p className="description">
						Support your local library and open-source developers.
					</p>
					<a
						className="downloadButton" 
						href="src/assets/resume.pdf"
						download="resume.pdf"
					>Download
					</a>
				</div>
			</div>
		</div>
	)
}
