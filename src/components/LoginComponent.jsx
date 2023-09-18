import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';

// export default class LoginComponent extends Component {
    
//     constructor(props){
//         super(props);
//         this.state = {
//             username:'',
//             password:'',
//             role:''
        
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
       
//     }

    
    // handleChange(event){
    //     this.setState({
    //         [event.target.name] : event.target.value,
    //         // Redirect: true
    //     });
    // }
    // async handleSubmit(event){
    //     event.preventDefault();
    //     const user = {
            
    //         username : this.state.username,
    //         password : this.state.password
    //     };
    //     // console.log(user);
  
    //     await axios.post(`http://localhost:8081/login/${user.username}/${user.password}`)
    //         .then(response => {
    //             alert("successful");
    //             // console.log(response.data)
    //             return response.data
                
                
            //  })
            //  .then(data => {
            //     console.log(data)
            //     if(data.user.role === 'Admin'){
            //         console.log('Admin is working')
            //         this.setState({role :'Admin'})
                     
            //         //navigate add krna hai navigate('/adminlogined');
                    
            //     }
            //     else{
            //         console.log('customer is working')
            //         this.setState({role :'Customer'})

            //         //navigate add krna hai navigate('/customerlogined');

            //     }
            //  })
            // //  .then(() =>this.setState({ redirect: true }))
             
            //  .catch(error => {
            //     console.log(error.response.data.error)
            //     alert("wrong credentials");
            //  })

            // // this.props.history.push("/adminloggedin");
             
            // }




//   render() {
//     return (
    //     <>
    //     <header>
    //             <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                
    //             <Link to={'/'} className='navbar-brand'>Moving Ticket Booking Application</Link> 
    //             {/* <Link to={'/listMovies'}><button className="btn btn-primary mx-2">List Movie</button></Link> */}
    //             <Link to={'/login'}><button className="btn btn-primary mx-2">LOGIN</button></Link>
    //             <Link to={'/register'}><button className="btn btn-primary mx-2">SIGNUP</button></Link>

    //             <Link to={'/adminloggedin'}><button className="btn btn-primary mx-2">ADMIN logged in</button></Link>
    //             <Link to={'/customerloggedin'}><button className="btn btn-primary mx-2">CUSTOMER logged in</button></Link>



                
    //             </nav>

    //             </header>

    //     <div className='login-card'>
            
    //             {/* <form onSubmit={this.handleSubmit}> */}
    //             <div className='card col-md-6 offset-md-3 offset-md-3'>
    //                 <h3 className='login-button'>LOGIN</h3>
                   
                
        
    //             <div className="mb-3 login-button">
    //             <label>User Name</label>
    //             <input type="text" name="username" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" placeholder="User Name"  value={this.state.username} required />
    //             </div>
        
    //             <div className="mb-3 login-button">
    //             <label>Password </label>
    //             <input type="password" name="password" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} required/>

    //             </div>
    //             <div className="d-grid login-button">
    //             <Link to={ this.state.role && this.state.role == 'Admin' ? '/adminloggedin' : '/customerloggedin' } > <Button type ="submit" variant="contained" onClick={this.handleSubmit}>Log In</Button> </Link> 
    //             </div>
        
    //             <p className="forgot-password text-right login-button">
    //             Create an account<Link to='/register' >Register</Link>
    //             </p>
    //             </div>
    //         {/* </form> */}
           
    //         </div>
    // </>
        
//       )
//   }
// }




// import React from 'react'

function LoginComponent() {

const [ user, setUser ]  = useState({
    username:'',
    password:''

});

const navigate = useNavigate();
   const handleChange = (event)=>{
         setUser({
            ...user,
            [event.target.name] : event.target.value,
            // Redirect: true
        });
        
    }
    

    const handleSubmit = async (event)=>{
        event.preventDefault();

        // const userdetails = {
            
        //     username : user.username,
        //     password : user.password
        // };

        // console.log(user);
  
        await axios.post(`http://localhost:8081/login/${user.username}/${user.password}`)
            .then(response => {
                alert("successful");
                // console.log(response.data)
                return response.data
            })
            .then(data => {
               console.log(data)
               if(data.user.role === 'Admin'){
                   console.log('Admin is working')
                //    this.setState({role :'Admin'})
                    
                  navigate('/adminloggedin');
                   
               }
               else{
                   console.log('customer is working')
                //    this.setState({role :'Customer'})

                  navigate('/customerloggedin');

               }
            })
           //  .then(() =>this.setState({ redirect: true }))
            
            .catch(error => {
            //    console.log(error.response.data)
               alert("wrong credentials");
            })

           // this.props.history.push("/adminloggedin");
            
           }






  return (
    <>
    <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            
            <Link to={'/'} className='navbar-brand'>Moving Ticket Booking Application</Link> 
            {/* <Link to={'/listMovies'}><button className="btn btn-primary mx-2">List Movie</button></Link> */}
            <Link to={'/login'}><button className="btn btn-primary mx-2">LOGIN</button></Link>
            <Link to={'/register'}><button className="btn btn-primary mx-2">SIGNUP</button></Link>

            {/* <Link to={'/adminloggedin'}><button className="btn btn-primary mx-2">ADMIN logged in</button></Link> */}
            {/* <Link to={'/customerloggedin'}><button className="btn btn-primary mx-2">CUSTOMER logged in</button></Link> */}



            
            </nav>

            </header>

    <div className='login-card'>
        
            <form onSubmit={handleSubmit}>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h3 className='login-button'>LOGIN</h3>
               
            
    
            <div className="mb-3 login-button">
            <label>User Name</label>
            <input type="text" name="username" onChange={handleChange} className="form-control" id="exampleInputEmail1" placeholder="User Name"  value={user.username} required />
            </div>
    
            <div className="mb-3 login-button">
            <label>Password </label>
            <input type="password" name="password" onChange={handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" value={user.password} required/>

            </div>
            <div className="d-grid login-button">
             <Button type ="submit" variant="contained" >Log In</Button> 
            </div>
    
            <p className="forgot-password text-right login-button">
            Create an account<Link to='/register' >Register</Link>
            </p>
            </div>
        </form>
       
        </div>
</>
  )
}

export default LoginComponent