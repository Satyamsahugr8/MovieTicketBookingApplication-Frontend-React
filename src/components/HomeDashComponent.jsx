import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieService from '../services/MovieService';

class HomeDashComponent extends Component {


    constructor(props) {
        super(props)
        
        this.state = {
            movies: []
        }

    }
    componentDidMount(){
        MovieService.getMovies().then(( res )=> {
            console.log(res);
            this.setState({ movies: res.data })
        })
    }




    render() {
        return (
            <div>

<header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                
                <Link to={'/'} className='navbar-brand'>Moving Ticket Booking Application</Link> 
                {/* <Link to={'/listMovies'}><button className="btn btn-primary mx-2">List Movie</button></Link> */}
                <Link to={'/homedash'}><button className="btn btn-primary mx-2">DASHBOARD</button></Link>
                <Link to={'/login'}><button className="btn btn-primary mx-2">LOGIN</button></Link>
                <Link to={'/register'}><button className="btn btn-primary mx-2">SIGNUP</button></Link>


                </nav>
                </header>

<br /><br />

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
                                        <Link to={'/login'}><button className="btn btn-primary">Book Ticket</button></Link>
                                            {/* <Link to={`/updatemovies/${movie.movieId}`}><button className="btn btn-info mx-2">Update</button></Link> */}
                                            {/* <button onClick={(event)=>this.handleDeleteMovie(event,movie.movieId)} className="btn btn-danger">Delete</button> */}
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

export default HomeDashComponent;