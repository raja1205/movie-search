import React from "react";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {

return(
	<div className="movie" key={imdbID}>
	<div>
		{ Year != null ? <p>{Year}</p> : <p>Year N/A</p> }
	</div>

	<div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
	</div>

	<div>
        <span>{Type}</span>
        <h3>{Title}</h3>
	</div>

	</div>
	);

}

export default MovieCard;
