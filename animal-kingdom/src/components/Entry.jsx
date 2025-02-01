export default function Entry(props) {

	const parametersElements = props.parameters
	  .split(/(--\S+)/g)  // Split the parameters string by any occurrence of '--' followed by non-space characters
	  .map((part, index, partsArray) => {  // Iterate over the resulting parts
	    if (!part.trim()) return null;  // If the part is empty or contains only whitespace, ignore it

	    const isParamName = part.startsWith('--');  // Check if the part is a parameter name (starts with '--')
	    const isSRefValue = !isParamName && partsArray[index - 1] === '--sref';  // Check if the part is a value following '--sref'

	    return (
	      <div key={index} className="paramSegment">  {/* Wrap each part in a 'paramSegment' div */}
	        {isParamName ? (  // If it's a parameter name (starts with '--')
	          <span className="paramName">{part}</span>  // Render it inside a span with 'paramName' class
	        ) : isSRefValue ? (  // If it's an 'sref' value (following '--sref')
	          // Special handling for --sref values: split them into individual URLs
	          <div className="paramValue sref-values">
	            {part.trim().split(/\s+/).map((url, urlIndex) => (  // Split by whitespace and map over each URL
	              <div key={urlIndex} className="url-line">
	                {url}  {/* Display each URL */}
	                {urlIndex < part.trim().split(/\s+/).length - 1 && <br />}  {/* If there are more URLs, add a line break */}
	              </div>
	            ))}
	          </div>
	        ) : (  // If it's a regular parameter value
	          <span className="paramValue">{part}</span>  // Render it inside a span with 'paramValue' class
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
					<a className="source-site" 
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