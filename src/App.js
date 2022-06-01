import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css"
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const App = () => {
const [searchTerm, setSearchTerm] = useState('');
const [movies, setMovies] = useState([]);

const searchMovies = async (title) => {

const options = {
  method: 'GET',
  url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/${title}`,
  params: {info: 'mini_info', limit: '10', page: '1', titleType: 'movie'},
  headers: {
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
    'X-RapidAPI-Key': '6cca1a9e39msh4fa0b3de26ef260p197e9cjsn6ef46d846997'
  }
};

await axios.request(options).then(function (response) {
	setMovies(response.data.results);
}).catch(function (error) {
	console.error(error);
});

}

useEffect(() => {
searchMovies(searchTerm);
}, [searchTerm]);

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
	{ movies.map(movie => <MovieCard movie={movie} key={movie.id} />) }
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
