import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import pic from "../images/Capture.PNG";

export default class AdminComponent extends Component {
  render() {
    return (
      <>
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

        <div>
        <br />
        <div> <h3 className='text-center' style={{"backgroundColor":"blue"}}>Welcome to Admin DashBoard</h3></div>
        <br />
          <img className='img' style={{marginLeft: "200px" , marginTop: "15px", height:"500px" }} src={pic} alt="" ></img>
        </div>
        </>
    )
  }
}
