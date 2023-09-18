import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieService from '../services/MovieService';


class AddMovieComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            movieName: "",
            movieGenre:"",
            movieHours:"",
            movieLanguage:"",
            movieDescription:"" 
        };
        
        // this.changeMovieNameHandler = this.changeMovieNameHandler.bind(this);
        // this.changeMovieGenreHandler = this.changeMovieGenreHandler.bind(this);
        // this.changeMovieHoursHandler = this.changeMovieHoursHandler.bind(this);
        // this.changeMovieLanguageHandler = this.changeMovieLanguageHandler.bind(this);
        // this.changeMovieDescriptionHandler = this.changeMovieDescriptionHandler.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


        // this.saveMovie = this.saveMovie.bind(this);

    }




    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value,
        });
    }



    
    handleSubmit(event){
        event.preventDefault();
        let movie = {
            movieName: this.state.movieName,
            movieGenre: this.state.movieGenre,
            movieHours: this.state.movieHours,
            movieLanguage: this.state.movieLanguage,
            movieDate: this.state.movieDate,
            movieDescription: this.state.movieDescription
        };

        console.log(' movie=> '+ JSON.stringify(movie));

        MovieService.addMovie(movie).then(res=> {
            console.log(res.data)
            alert("succussfully added")
        })
        .catch((er)=>alert("Movie cannot be added"));

    }




    render() {
        return (
            <div>
                <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        


        <Link to={'/'} className='navbar-brand'>Moving Ticket Booking Application</Link>


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



                <div className='container'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h3 className='text-center'>Add Movie</h3>

                             <div className='card-body'>
                                
                                <form onSubmit={this.handleSubmit}>
                                    
                                    <div className='form-group'>
                                        <label >Movie Name</label>
                                        <input placeholder='Movie Name' type='text' name='movieName'className='form-control' value={this.state.movieName} onChange={this.handleChange} required/>
                                    </div>

                                    <div className='form-group'>
                                        <label >Movie Genre</label>
                                        <input placeholder='Movie Genre' name='movieGenre' className='form-control' value={this.state.movieGenre} onChange={this.handleChange} required/>
                                    </div>

                                    <div className='form-group'>
                                        <label >Movie Hours</label>
                                        <input placeholder='Movie Hours' name='movieHours' className='form-control' value={this.state.movieHours} onChange={this.handleChange} required/>
                                    </div>

                                    <div className='form-group'>
                                        <label >Movie Language</label>
                                        <input placeholder='Movie Language' name='movieLanguage' className='form-control' value={this.state.movieLanguage} onChange={this.handleChange} required/>
                                    </div>

                                    <div className='form-group'>
                                        <label >Movie Date</label>
                                        <input placeholder='YYYY-MM-DD' name='movieDate' className='form-control' value={this.state.movieDate} onChange={this.handleChange} required/>
                                    </div>

                                    <div className='form-group'>
                                        <label >Movie Description</label>
                                        <input placeholder='Movie Description' name='movieDescription' className='form-control' value={this.state.movieDescription} onChange={this.handleChange} required/>
                                    </div>

                                    {/* <button className='btn btn-success' onClick={this.saveMovie}>Save</button> */}

                                    <button type='submit' className='btn btn-success' >Save</button>

                                    <Link to={'/listMovies'}><button className="btn btn-danger" style={{marginLeft: "10px"}}> cancel </button> </Link>
                                    

                                </form>

                             </div>
                    </div>


                </div>

            </div>
        );
    }
}

export default AddMovieComponent;



