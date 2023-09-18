import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';


function CustomerInfoComponent() {

    const [customer,setCustomer]=useState([])
    const navigate=useNavigate();
   useEffect(()=>{
       getData();

   },[])

   const getData=async()=>{
      const result=await axios.get("http://localhost:8081/customer/findall")
    //    console.log(data)
    setCustomer(result.data)
   }

   const deleteCustomer=async (customer)=>{
    await axios.delete(`http://localhost:8081/customer/delete/${customer.customerId}`)
     .then(resp=>console.log("Customer deleted"))
     .catch(err=>console.log("not deleted"))
      getData();
   }

   const updateCustomer = async (customer)=>{
    navigate("/updatecustomer")
   }
   
  return (
    <div>
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




      <Link to={'/addcustomer'}><button className="btn btn-primary">Add Customer</button></Link>
      <h2 className='text-center'>Customer List</h2>
        <table className="table table-striped">
          <thead>
            <tr> 
                <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customer.map((cus)=>(

                <tr key={cus.customerId}>
                    <th scope="row">{cus.customerId}</th>
                    <td>{cus.customerName}</td>
                    <td>{cus.address}</td>
                    <td>{cus.mobileNumber}</td>
                    <td>{cus.email}</td>
                    <td>{cus.password}</td>
                    <td>
                        <button onClick={()=>updateCustomer(cus)} className="btn btn-primary">Update</button>
                        <button onClick={()=>deleteCustomer(cus)} className="btn btn-danger">Delete</button>
                    </td>
                </tr>

            ))}
          </tbody>
        </table>
    </div>
  )
}

export default CustomerInfoComponent;