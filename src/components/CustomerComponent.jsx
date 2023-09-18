import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieService from '../services/MovieService';

class CustomerComponent extends Component {


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
 <>           <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        
        <Link to={'/customerloggedin'} className='navbar-brand'>Moving Ticket Booking Application</Link> 
        
        {/* <Link to={'/listMovies'}><button className="btn btn-primary mx-2">List Movie</button></Link> */}
        {/* <Link to={'/login'}><button className="btn btn-primary mx-2">LOGIN</button></Link> */}
        {/* <Link to={'/register'}><button className="btn btn-primary mx-2">SIGNUP</button></Link> */}

        {/* <Link to={'/updatecustomer'}><button className="btn btn-primary mr-0">Update Profile</button></Link> */}

        {/* <Link to={'/customerdashboard'}><button className="btn btn-primary mx-2">Dashboard</button></Link> */}

        <Link to={'/login'}><button className="btn btn-danger" style={{marginRight:"0"}}>Logout</button></Link>
        


        
        </nav>

        </header>
        <br />
        <div> <h3 className='text-center' style={{"backgroundColor":"blue"}}>Welcome to Customer DashBoard</h3></div>
<br />


        <div>
            {/* <Link to={'/addMovie'}><button className="btn btn-primary">Add Movie</button></Link> */}
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
                                        <Link to={'/booke'}><button className="btn btn-primary">Book Ticket</button></Link>
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


</>
        );
    }
}

export default CustomerComponent;