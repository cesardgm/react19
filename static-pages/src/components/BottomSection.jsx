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
					<a 
						href="https://github.com/cesardgm" 
						className="social_item"
					>
						<FaGithub size={36}/>
						<span>/cesardgm</span>
					</a>
					<a 
						href="https://www.linkedin.com/in/cesar-gonzalez-844000274" 
						className="social_item"
					>
						<FaLinkedin size={36}/>
						<span>/cesar-gonzalez-844000274</span>
					</a>
				</div>
			</div>
		</div>
	)
}