import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
// import {Navigate} from 'react-router-dom';

export default class LoginComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            role:''
        
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value,
            Redirect: false
        });
    }
    handleSubmit(event){
        event.preventDefault();
        const user = {
            
            username : this.state.username,
            password : this.state.password,
            role : 'Customer'
        };
        console.log(user);
    
        axios.post(`http://localhost:8081/user/adduser`,user)
            .then(response => {
                console.log(response)
                alert("successful");
                return response.data
                
             })
             .then(data => {
                console.log(data)
             })
             .then(() =>this.setState({ redirect: true }))
             
             .catch(error => {
                console.log(error.response.data.error)
                alert("Already a user");
             })
            }
            
  render() {
    return (
        <>
        <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                
                <Link to={'/'} className='navbar-brand'>Moving Ticket Booking Application</Link> 
                {/* <Link to={'/listMovies'}><button className="btn btn-primary mx-2">List Movie</button></Link> */}
                <Link to={'/login'}><button className="btn btn-primary mx-2">LOGIN</button></Link>
                <Link to={'/register'}><button className="btn btn-primary mx-2">SIGNUP</button></Link>



                
                </nav>

                </header>

        <div className='login-card'>
            
                <form onSubmit={this.handleSubmit}>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h3 className='login-button'>REGISTER</h3>
                   
                
        
                <div className="mb-3 login-button">
                <label>UserName</label>
                <input type="text" name="username" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" placeholder="User Name"  value={this.state.username} required />
                </div>
        
                <div className="mb-3 login-button">
                <label>Password </label>
                <input type="password" name="password" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} required/>

                </div>
                <div className="d-grid login-button">
                <Button type ="submit" variant="contained">Log In</Button>
                </div>
        
                <p className="forgot-password text-right login-button">
                already have an account<Link to='/login' >Login</Link>
                </p>
                </div>
            </form>
           
            </div>
    </>
        
      )
  }
}
