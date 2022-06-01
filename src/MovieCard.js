import React from "react";

const MovieCard = ({ movie }) => {

return(
	<div className="movie">
	<div>
		{ movie.releaseYear != null ? <p>{movie.releaseYear.year}</p> : <p>Year N/A</p> }
	</div>

	<div>
		<img src={movie.primaryImage != null ? movie.primaryImage.url : "https://via.placeholder.com/400"} alt={movie.titleText.text} />
	</div>

	<div>
		<span>{movie.titleType.text}</span>
		<h3>{movie.titleText.text}</h3>
	</div>

	</div>
	);

}

export default MovieCard;
