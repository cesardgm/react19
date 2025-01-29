import profileImage from "../assets/profileImage.png";
import resumePdf from "../assets/resume.pdf"

export default function TopSection() {
	return (
		<div className="group-0">
			<div className="profile_container">
				<div className="profile_image_container">
					<img
						className="profile_image" 
						src={profileImage}
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
						href={resumePdf}
						download="resume.pdf"
					>Download
					</a>
				</div>
			</div>
		</div>
	)
}
