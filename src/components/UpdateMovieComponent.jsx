// import React, { Component } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import MovieService from '../services/MovieService';

// class UpdateMovieComponent extends Component {
    
    

//     constructor(props) {
//         super(props)
        
        
        // this.state = {
        //     id: "",
        //     movieName: "",
        //     movieGenre:"",
        //     movieHours:"",
        //     movieLanguage:"",
        //     movieDescription:"" 
        // };
        
        
//         console.log(this.props.match.params);
       

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
        
//         // this.updateMovie = this.updateMovie.bind(this);
        
//     }

//     handleChange(event){
//         this.setState({ 
//             [event.target.name] : event.target.value,
//         });
//     }


//     componentDidCatch(){
//         MovieService.getMovieById(this.state.id).then((res) => {
//             let movie1 = res.data;
//             this.setState({
//                 movieName: movie1.movieName,
//                 movieGenre: movie1.movieGenre,
//                 movieHours: movie1.movieHours,
//                 movieLanguage: movie1.movieLanguage,
//                 movieDate: movie1.movieDate,
//                 movieDescription: movie1.movieDescription
//             });

//         });
//     }


    
    // handleSubmit(event){
    //     event.preventDefault();
    //     let movie = {
    //         movieName: this.state.movieName,
    //         movieGenre: this.state.movieGenre,
    //         movieHours: this.state.movieHours,
    //         movieLanguage: this.state.movieLanguage,
    //         movieDate: this.state.movieDate,
    //         movieDescription: this.state.movieDescription
    //     };

    //     console.log(' movie=> '+ JSON.stringify(movie));

    //     MovieService.getMovieById(movie).then(res=> {
    //         console.log(res.data)
    //         alert("succussfully updated")
    //     })
    //     .catch((er)=>alert("Movie cannot be updated"));

    // }




//     render() {
//         return (
            // <div>
            //     <div className='container'>
            //         <div className='card col-md-6 offset-md-3 offset-md-3'>
            //             <h3 className='text-center'>Add Movie</h3>

            //                  <div className='card-body'>
                                
            //                     <form onSubmit={this.handleSubmit}>
                                    
            //                         <div className='form-group'>
            //                             <label >Movie Name</label>
            //                             <input placeholder='Movie Name' type='text' name='movieName'className='form-control' value={this.state.movieName} onChange={this.handleChange} required/>
            //                         </div>

            //                         <div className='form-group'>
            //                             <label >Movie Genre</label>
            //                             <input placeholder='Movie Genre' name='movieGenre' className='form-control' value={this.state.movieGenre} onChange={this.handleChange} required/>
            //                         </div>

            //                         <div className='form-group'>
            //                             <label >Movie Hours</label>
            //                             <input placeholder='Movie Hours' name='movieHours' className='form-control' value={this.state.movieHours} onChange={this.handleChange} required/>
            //                         </div>

            //                         <div className='form-group'>
            //                             <label >Movie Language</label>
            //                             <input placeholder='Movie Language' name='movieLanguage' className='form-control' value={this.state.movieLanguage} onChange={this.handleChange} required/>
            //                         </div>

            //                         <div className='form-group'>
            //                             <label >Movie Date</label>
            //                             <input placeholder='YYYY-MM-DD' name='movieDate' className='form-control' value={this.state.movieDate} onChange={this.handleChange} required/>
            //                         </div>

            //                         <div className='form-group'>
            //                             <label >Movie Description</label>
            //                             <input placeholder='Movie Description' name='movieDescription' className='form-control' value={this.state.movieDescription} onChange={this.handleChange} required/>
            //                         </div>

            //                         {/* <button className='btn btn-success' onClick={this.saveMovie}>Save</button> */}

            //                         <button type='submit' className='btn btn-success' >Save</button>

            //                         <Link to={'/listMovies'}><button className="btn btn-danger" style={{marginLeft: "10px"}}> cancel </button> </Link>
                                    

            //                     </form>

            //                  </div>
            //         </div>


            //     </div>

            // </div>

            
//         );
//     }
// }

// export default UpdateMovieComponent;




import React, { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

function UpdateMovieComponent() {


    const {movieId} = useParams();


    const [movie,setMovie] = useState ({
        
        id: movieId ,
        movieName: "" ,
        movieGenre:"" ,
        movieHours:"" ,
        movieLanguage:"" ,
        movieDescription:""
    });
    

    useEffect(()=>{
       const fetchdata = async()=> {
        await axios.get(`http://localhost:8081/movies/viewMovie/${movieId}`).then(res=> {
            setMovie(res.data)
        })
        .catch((er)=>alert("Movie cannot be updated"));}
       if(movieId)
       {
        fetchdata();
    }},[])




    console.log(movieId);


    const handleChange = (event)=>{
        setMovie({ 
            ...movie,
            [event.target.name] : event.target.value,
        });
    }
    
    const navigate = useNavigate();
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        // let movie = {
        //     movieName: movie.movieName,
        //     movieGenre: movie.movieGenre,
        //     movieHours: movie.movieHours,
        //     movieLanguage: movie.movieLanguage,
        //     movieDate: movie.movieDate,
        //     movieDescription: movie.movieDescription
        // };

        console.log(' movie=> '+ JSON.stringify(movie));

        axios.put(`http://localhost:8081/movies/update/${movieId}`,movie).then(res=> {
            alert("succussfully updated")
        })
        .catch((er)=>alert("Movie cannot be updated"));
        navigate('/listmovies');

    }

  return (
    <>
    
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









    <div>
    <div className='container'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h3 className='text-center'>Update Movie</h3>

                 <div className='card-body'>
                    
                    <form onSubmit={handleSubmit}>
                        
                        <div className='form-group'>
                            <label >Movie Name</label>
                            <input placeholder='Movie Name' type='text' name='movieName'className='form-control' value={movie.movieName} onChange={(event)=>handleChange(event)} required/>
                        </div>

                        <div className='form-group'>
                            <label >Movie Genre</label>
                            <input placeholder='Movie Genre' name='movieGenre' className='form-control' value={movie.movieGenre} onChange={(event)=>handleChange(event)} required/>
                        </div>

                        <div className='form-group'>
                            <label >Movie Hours</label>
                            <input placeholder='Movie Hours' name='movieHours' className='form-control' value={movie.movieHours} onChange={(event)=>handleChange(event)} required/>
                        </div>

                        <div className='form-group'>
                            <label >Movie Language</label>
                            <input placeholder='Movie Language' name='movieLanguage' className='form-control' value={movie.movieLanguage} onChange={(event)=>handleChange(event)} required/>
                        </div>

                        <div className='form-group'>
                            <label >Movie Date</label>
                            <input placeholder='YYYY-MM-DD' name='movieDate' className='form-control' value={movie.movieDate} onChange={(event)=>handleChange(event)} required/>
                        </div>

                        <div className='form-group'>
                            <label >Movie Description</label>
                            <input placeholder='Movie Description' name='movieDescription' className='form-control' value={movie.movieDescription} onChange={(event)=>handleChange(event)} required/>
                        </div>

                        {/* <button className='btn btn-success' onClick={this.saveMovie}>Save</button> */}

                        <button type='submit' className='btn btn-success' >Save</button>

                        <Link to={'/listMovies'}><button className="btn btn-danger" style={{marginLeft: "10px"}}> cancel </button> </Link>
                        

                    </form>

                 </div>
        </div>


    </div>

</div>

    
</>

  )
}

export default UpdateMovieComponent





