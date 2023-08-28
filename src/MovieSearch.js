import React,{useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import { searchMovies } from "./components/movieSlice";
import "./App.css";


function MovieSearch (){
    const [query,setQuery]=useState("")
    const dispatch = useDispatch();
    const searchResults=useSelector((state)=>state.movies.searchResults)

   

const handleClick=()=>{
    console.log("clicked")
dispatch(searchMovies(query));
}

    return (
        <div>
        <div className="searchBar">
        <h1>Movie Search App</h1>
            <input 
                type="text"
                placeholder="Search for Movies"
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                className="input" name="text" 
            />
            <button 
            onClick={handleClick}
            className="btn btn-primary">Search</button>    
            </div>
            <div class="container">
                {searchResults.map((movie)=>(
                <div key={movie.imdbID} className="MovieCard">
               
                    <h3 className="title">{movie.Title}</h3>
                    <p className="year"> Year : {movie.Year}</p>
                    <img src={movie.Poster} />
                </div>
                ))}
                </div>
                <footer>
        <p>Developed by Tejas Pattar </p>
    </footer>
        </div>
    )
}
export default MovieSearch;
