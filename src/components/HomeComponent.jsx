import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pic from "../images/booking-movie-tickets.jpg";

import pic1 from "../images/Capture.PNG";
import pic2 from "../images/download.jpg";

class HomeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {    
        }
    }

    



render() {

  
        return (
            <>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                
                <Link to={'/'} className='navbar-brand'>Moving Ticket Booking Application</Link> 
                {/* <Link to={'/listMovies'}><button className="btn btn-primary mx-2">List Movie</button></Link> */}
                <Link to={'/homedash'}><button className="btn btn-primary mx-2">DASHBOARD</button></Link>
                <Link to={'/login'}><button className="btn btn-primary mx-2">LOGIN</button></Link>
                <Link to={'/register'}><button className="btn btn-primary mx-2">SIGNUP</button></Link>


                </nav>
                </header>


            <img className='img' style={{marginLeft: "250px" , marginTop: "30px", height:"600px" }} src={pic} alt="" ></img>


            {/* <div> <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={pic}  style={{marginLeft: "250px" , marginTop: "30px", height:"600px" }} alt="First slide"></img>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={pic1} style={{marginLeft: "250px" , marginTop: "30px", height:"600px" }} alt="Second slide"></img>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={pic2} style={{marginLeft: "250px" , marginTop: "30px", height:"600px" }} alt="Third slide"></img>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div> */}

          
        

            </>
        );
    }
}

export default HomeComponent;