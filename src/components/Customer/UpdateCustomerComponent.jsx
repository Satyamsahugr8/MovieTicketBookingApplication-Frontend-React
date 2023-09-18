import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function UpdateCustomerComponent() {
  const navigate=useNavigate();
  const [customer,setCustomer]=useState({
      customerId:"",
   customerName:"",
   address:"",
   mobileNumber:"",
   email:"",
   password:""

});
const[customerId,setCid]=useState("")
const[customerName,setCname]=useState("")
const[address,setCaddress]=useState("")
const[mobileNumber,setCmobile]=useState("")
const[email,setCemail]=useState("")
const[password,setCpassword]=useState("")


const postData=()=>{
  axios.put("http://localhost:8081/customer/update",{customerId,customerName,address,mobileNumber,email,password})
  .then(resp=>{console.log(resp.data)})
  .catch(err=>console.log("customer not updated"))
  navigate("/customerinfo")
  };


//   const postData = (event)=>{
//     event.preventDefault();
//     // let movie = {
//     //     movieName: movie.movieName,
//     //     movieGenre: movie.movieGenre,
//     //     movieHours: movie.movieHours,
//     //     movieLanguage: movie.movieLanguage,
//     //     movieDate: movie.movieDate,
//     //     movieDescription: movie.movieDescription
//     // };

//     console.log(' movie=> '+ JSON.stringify(movie));

//     axios.put(`http://localhost:8081/movies/update/${movieId}`,movie).then(res=> {
//         alert("succussfully updated")
//     })
//     .catch((er)=>alert("Movie cannot be updated"));
//     navigate('/listmovies');

// }




  return (
<><header>
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


    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Update a Customer</h2>
        <form name="myForm" onSubmit={postData}>

                <label>Customer Id</label>
                <input type="text" name="id" onChange={(c)=>setCid(c.target.value)}/><br/>
                <label>Customer Name</label>
                <input type="text" name="cname" onChange={(c)=>setCname(c.target.value)}/><br/>
                <label>Customer Address</label>
                <input type="text" name="caddress" onChange={(c)=>setCaddress(c.target.value)} /><br/>
                <label>Customer Mobile</label>
                <input type="text" name="cmobile" onChange={(c)=>setCmobile(c.target.value)}/><br/>
                <label>Customer Email</label>
                <input type="text" name="cemail" onChange={(c)=>setCemail(c.target.value)}/><br/>
                <label>Customer Password</label>
                <input type="text" name="cpassword" onChange={(c)=>setCpassword(c.target.value)}/><br/>

          <button className="btn btn-warning btn-block">Update Customer</button>
        </form>
      </div>
    </div>

    </>
  );
};

export default UpdateCustomerComponent;