export default function Entry(props) {

	const parametersElements = props.parameters
	  // Split the string into alternating parts of parameters and values
	  .split(/(--\S+)/g)
	  // Process each part to wrap parameters and values appropriately
	  .map((part, index) => {
	    if (!part) return null; // Ignore empty strings
	    
	    return(
			<div key={index} className="paramValuePair">
				{part.startsWith('--') ? (
					<span className="paramName">{part}</span>
				) : (
					<span className="paramValue">{part}</span>
				)}
			</div>
	    );
	  });

	return(
		<div className="entry-container">

			<div className="main-image-container">
				<img 
					className="main-image"
					src={props.img.src}
					alt={props.img.alt}
				/>
			</div>

			<div className="info-container">
				<div className="source-container">
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
				</div>

				
				<a 
					className="wikipedia-link" 
					href={props.wikipedia_link}
				>
					<h2 className="entry-title">{props.title}</h2>
				</a>

				<p className="creation-date">{props.creation_date}</p>
				<p className="prompt">{props.prompt}</p>
				<div className="parameters">{parametersElements}</div>
			</div>
		</div>
	)
};