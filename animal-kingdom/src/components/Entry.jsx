export default function Entry(props) {

	return(
		<article className="entry">
			<div className="main-image-container">
				<img 
					className="main-image"
					src={props.img.src}
					alt={props.img.alt}
				/>
			</div>
			<div className="info-container">
				<a c
					lassName="source-site" 
					href={props.source_site}
				>
					<img 
						className="source-logo"
						src={props.source_logo.src}
						alt={props.source_logo.alt}
					/>
				</a>
				<span className="source">{props.source}</span>
				<a 
					className="wikipedia-link" 
					href={props.wikipedia_link}
				>
					View Wikipedia Facts
				</a>
				<h2 className="entry-title">{props.title}</h2>
				<p className="creation-date">{props.creation_date}</p>
				<p className="prompt">{props.prompt}</p>
				<p className="parameters">{props.parameters}</p>
			</div>
		</article>
	)
};