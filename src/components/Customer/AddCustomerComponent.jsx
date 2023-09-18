import axios from 'axios'
import React, { useEffect } from 'react'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

function AddCustomerComponent() {
    
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
    axios.post("http://localhost:8081/customer/add",{customerId,customerName,address,mobileNumber,email,password})
    .then(resp=>{console.log(resp.data)})
    .catch(err=>console.log("customer not added"))
    alert('successfully added customer');
    navigate("/customerinfo")
}

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
                        <h3 className='text-center'>Add Customer</h3>
        {/* <h1>Add Customer</h1> */}
        <form name="myForm" >
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
                <button type="submit" onClick={postData}>Submit</button>
        </form>

</div></div>
    </div>

  )
}

export default AddCustomerComponent

function useHistory() {
    throw new Error('Function not implemented.');
}
