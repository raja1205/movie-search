import React from "react";
import { useState, useEffect } from "react";
import "./App.css"
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=d322af96";

const App = () => {
const [searchTerm, setSearchTerm] = useState('');
const [movies, setMovies] = useState([]);

useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

return(
	<div className="app">
	<h1>Movie Search App</h1>

	<div className="search">
		<input 
		value={searchTerm}
		placeholder="Search for Movies..."
		onChange={(e) => setSearchTerm(e.target.value)}
		/>
		<img src={SearchIcon} alt="Search" onClick={()=> searchMovies(searchTerm)} />
	</div>

	{ movies?.length > 0 ? (
	<div className="container">
	{ movies.map((movie, index) => <MovieCard movie={movie} key={index} />) }
	</div>
	) : (
	<div className="empty">
		<h2>No Movies found</h2>
	</div>
	)
	}

	</div>
	);

}

export default App;
