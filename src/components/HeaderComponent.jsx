import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class HeaderComponent extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
           
        }

}
    
    render() {
        return (
            <div>
                <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                
                <Link to={'/'} className='navbar-brand'>Moving Ticket Booking Application</Link> 
                <Link to={'/listMovies'}><button className="btn btn-primary mx-2">List Movie</button></Link>
                <Link to={'/login'}><button className="btn btn-primary mx-2">LOGIN</button></Link>
                <Link to={'/register'}><button className="btn btn-primary mx-2">SIGNUP</button></Link>



                
                </nav>

                </header>
                
            </div>
        );
    }
}

export default HeaderComponent;