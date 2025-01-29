import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export default function BottomSection() {
	return (
		<div className="group-3">
			{/* Contact Information */}
			<div className="contact">
				<h3 className="title">Contact</h3>
					<div className="contact_info">
						<p className="description">San Francisco Bay Area</p>
						<p className="description">+1 408 758 5196</p>
						<p className="description">cesardgm@berkeley.edu</p>
					</div>
			</div>
			{/* Socials */}
			<div className="socials">
				<h3 className="title">Socials</h3>
				<div className="social_items">
					<a href="#" className="social_item">
						<FaGithub size={48}/>
						<span>/cesardgm</span>
					</a>
					<a href="#" className="social_item">
						<FaLinkedin size={48}/>
						<span>/cesardgm</span>
					</a>
				</div>
			</div>
		</div>
	)
}