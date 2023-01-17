import React from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';
import './App.css';
import styled from 'styled-components'

function App(){
  const API_URL = 'https://imdb-api.com/en/';
  const API_KEY = 'k_nxm9q8en';
  const IMAGE_PATH = 'https://imdb-api.com/API/Posters/';
  const REVIEW_ALL = 'https://imdb-api.com/API/Reviews/';

  // VARIABLES DE ESTADO
  const [movies, setMovies] = useState([]);
  const [searchKey, serSearchKey] = useState("");
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  const [playing, setPlaying] = useState(false);
  const [review, setReview] = useState({ title: "Loading Ratings" });

  // FUNCION DE PETICION A API
  const fetchMovies = async(searchKey) =>{
    const type = searchKey ? "search" : "discover"
    const {data: { results },
  } = await axios.get(`${API_URL}/${type}/movie`, { 
    params: {
      api_key: API_KEY,
      query: searchKey,
    },
  });

  setMovies(results)
  setMovie(results[0])

  }

  return (
    <div>
      {/* contenedor para mostrar las peliculas actuales */}
      <div className='container'>
        <div className='row'>

        </div>
      </div>
    </div>
  );
}

export default App; 