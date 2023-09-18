import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MovieService from '../services/MovieService';

class ListMovieComponent extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            movies: []
        }

        this.addMovie = this.addMovie.bind(this);
        this.handleDeleteMovie = this.handleDeleteMovie.bind(this);
        this.removeByAttr = this.removeByAttr.bind(this);
    }
    
    componentDidMount(){
        MovieService.getMovies().then(( res )=> {
            console.log(res);
            this.setState({ movies: res.data })
        })
    }

    addMovie(){
        this.props.history.push('/addMovie');
    }


     removeByAttr ( attr, value){
        var i = this.state.length;
        while(i--){
           if( this.state[i] 
               && this.state[i].hasOwnProperty(attr) 
               && (arguments.length > 2 && this.state[i][attr] === value ) ){ 
    
                this.state.splice(i,1);
    
           }
        }
        return this.state;
    }


     async handleDeleteMovie(event,movieId){
        await axios.delete(`http://localhost:8081/movies/delete/${movieId}`).then(res=> {
        console.log(movieId,"delete");    
        // this.removeByAttr("movieId",movieId);
        alert("Successfully Movie Deleted");
        })
        .catch((er)=>alert("Movie cannot be deleted"));
        await axios.get(`http://localhost:8081/movies/findall`).then(res=> {
            console.log("58",res);
            // this.removeByAttr("movieId",movieId);
            // alert("Successfully Movie Deleted");
            this.setState ({
                movies: res.data
            })

            })
            .catch((er)=>alert("Data cannot be fetched"));
        

       

    }


    render() {
        return (
        <div>


<header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        


        <Link to={'/adminloggedin'} className='navbar-brand'>Moving Ticket Booking Application</Link>


        {/* <Link to={'/listMovies'}><button className="btn btn-primary mx-2">List Movie</button></Link> */}
        {/* <Link to={'/login'}><button className="btn btn-primary mx-2">LOGIN</button></Link> */}
        {/* <Link to={'/register'}><button className="btn btn-primary mx-2">SIGNUP</button></Link> */}

        
        <Link to={'/adminloggedin'}><button className="btn btn-primary mx-2">Dashboard</button></Link>
        <Link to={'/listMovies'}><button className="btn btn-primary mx-2"> Movie</button></Link>
        <Link to={'/listtheatres'}><button className="btn btn-primary mx-2">Theatre</button></Link>
        <Link to={'/listscreens'}><button className="btn btn-primary mx-2">Screen</button></Link>
        <Link to={'/customerinfo'}><button className="btn btn-primary mx-2">Customer</button></Link>
        
        
        <Link to={'/login'}><button className="btn btn-danger mx-2">Logout</button></Link>
        


        
        </nav>

        </header>




            <Link to={'/addMovie'}><button className="btn btn-primary">Add Movie</button></Link>
                <h2 className='text-center'>Movies List</h2>
                <div className='row'>
            </div>
                <div className='container'>
                    <table className='table table-striped table-bordered'>

                        <thead>
                            <tr>
                                <th>Movie Name</th>
                                <th>Movie Genre</th>
                                <th>Movie Hours</th>
                                <th>Movie Language</th>
                                <th>Movie Date</th>
                                <th>Movie Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.movies.map(
                                    movie =>
                                    <tr key ={movie.movieId}>
                                        <td>{movie.movieName}</td>
                                        <td>{movie.movieGenre}</td>
                                        <td>{movie.movieHours}</td>
                                        <td>{movie.movieLanguage}</td>
                                        <td>{movie.movieDate}</td>
                                        <td>{movie.movieDescription}</td>
                                        <td>
                                            
                                            <Link to={`/updatemovies/${movie.movieId}`}><button className="btn btn-info mx-2">Update</button></Link>
                                            <button onClick={(event)=>this.handleDeleteMovie(event,movie.movieId)} className="btn btn-danger">Delete</button>
                                        </td> 
                                       
                                        
                                    </tr>

                                )
                            }
                        </tbody>


                    </table>

                    
                </div>
                
            </div>
        );
    }
}

export default ListMovieComponent;