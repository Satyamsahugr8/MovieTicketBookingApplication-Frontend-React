import axios from 'axios';

const  MOVIE_API_BASE_URL = "http://localhost:8081/movies";
const  MOVIE_API_GET_URL = "http://localhost:8081/movies/findall";
const  MOVIE_API_POST_URL = "http://localhost:8081/movies/add";


class MovieService {
    
    // listing
    getMovies(){
        return axios.get(MOVIE_API_GET_URL);
    }
    
    //addmovie
    addMovie(Movie){
        return axios.post(MOVIE_API_POST_URL, Movie);
    }

    //getmoviebyId
    getMovieById(movieId){
        return axios.get(MOVIE_API_BASE_URL + '/' + movieId);
    }
}

export default new MovieService()