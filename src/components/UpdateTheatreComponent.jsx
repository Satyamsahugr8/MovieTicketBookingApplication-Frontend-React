import React, { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';



function UpdateTheatreComponent() {


    const {theatreId} = useParams();

    const [theatre,setTheatre] = useState ({
        
        id: theatreId ,
        theatreName: "" ,
        theatreCity:"" ,
        managerName:"" ,
        managerContact:""
        
    });
    
    useEffect(()=>{
       const fetchdata = async()=> {
        await axios.get(`http://localhost:8081/theatre/find/${theatreId}`).then(res=> {
            setTheatre(res.data)
        })
        .catch((er)=>alert("Theatre cannot be updated"));}
       if(theatreId)
       {
        fetchdata();
    }},[])



    console.log("36",theatreId);


    const handleChange = (event)=>{
        setTheatre({ 
            ...theatre,
            [event.target.name] : event.target.value,
        });
    }
    const navigate = useNavigate();

    const handleSubmit = (event)=>{
        event.preventDefault();
        

        console.log(' theatre=> '+ JSON.stringify(theatre));

        axios.put(`http://localhost:8081/theatre/update/${theatreId}`,theatre).then(res=> {
            alert("succussfully updated")
        })
        .catch((er)=>alert("Theatre cannot be updated"));
        navigate('/listtheatre');

    }

  return (
    <>
    <div>
    <div className='container'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h3 className='text-center'>Update Movie</h3>

                 <div className='card-body'>
                    
                    <form onSubmit={handleSubmit}>
                        
                        <div className='form-group'>
                            <label >Theatre Name</label>
                            <input placeholder='Theatre Name' type='text' name='theatreName'className='form-control' value={theatre.theatreName} onChange={(event)=>handleChange(event)} required/>
                        </div>

                        <div className='form-group'>
                            <label >Theatre City</label>
                            <input placeholder='Theatre City' name='theatreCity' className='form-control' value={theatre.theatreCity} onChange={(event)=>handleChange(event)} required/>
                        </div>

                        <div className='form-group'>
                            <label >Manager Name</label>
                            <input placeholder='Manager Name' name='managerName' className='form-control' value={theatre.managerName} onChange={(event)=>handleChange(event)} required/>
                        </div>

                        <div className='form-group'>
                            <label >Manager Contact</label>
                            <input placeholder='Manager Contact' name='managerContact' className='form-control' value={theatre.managerContact} onChange={(event)=>handleChange(event)} required/>
                        </div>

                        

                        
                        {/* <button className='btn btn-success' onClick={this.saveMovie}>Save</button> */}

                        <button type='submit' className='btn btn-success' >Save</button>

                        <Link to={'/listtheatres'}><button className="btn btn-danger" style={{marginLeft: "10px"}}> cancel </button> </Link>
                        

                    </form>

                 </div>
        </div>


    </div>

</div>

    
</>

  )
}

export default UpdateTheatreComponent