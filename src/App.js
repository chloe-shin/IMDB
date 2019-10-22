import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import logo from './logo.svg';
import InputRange from 'react-input-range';
import MovieCard from './components/MovieCard';
import Navibar from './components/Navibar';
import Hero from './components/Hero';
import FilterSection from './components/FilterSection';
import 'react-input-range/lib/css/index.css'

//import bootstrap
//call API
//useState (movie,setMovie) == import movie object
//useEffect ==running one time
//navbar component
//create MovieCard component (Movie Title, Year, Rating, and Poster) & import ; using map function, slice 20
//create moreMovies component (upload addtional moviecard); using concat 
//create Filterbar component (Genre, Year, Rating, Runtime) & import ;using filter function


export default function App() {

  const [movie, setMovie] = useState([])
  const [page, setPage] = useState(1)
  const [origMovies, setOrigMovies] = useState([]);
  const [ratingVal, setRatingVal] = useState({ min: 0, max: 10});

  useEffect(() => {
    getData()
  }, [])
  

  const getData = async () => {
    const api = process.env.REACT_APP_API
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    const response = await fetch(url)
    const data = await response.json()
    const newMovie = origMovies.concat(data.results)
    // onRatingSliderChange(newMovie,ratingVal)
    // const search = newMovie.filter (()=> {.value})
    setOrigMovies(newMovie);
    setMovie(newMovie)
    setPage(page + 1)
    // setQuery(search)
  }
 
  const filterMovie = (searchTerm) => {
    console.log("Searching for ", searchTerm);
    setMovie(origMovies.filter((m) => m.original_title.toLowerCase().includes(searchTerm.toLowerCase())))
  }

  


  return (
    <div className="App">
      <Navibar
        handleSearch={filterMovie}
        movie={setMovie}
      />
      <header className="App-header">

        
      <Hero 
      movie={movie[0]} 
      movies={movie}
      />


      <MovieCard 
      movie={movie} 
      origMovies= {origMovies}
      setMovie= {setMovie}
      ratingVal={ratingVal}
      setRatingVal= {setRatingVal}
      
      />
        
      <button className="seeMore" onClick={() => getData()}> See more </button>
      </header>
    </div>
  );
}



