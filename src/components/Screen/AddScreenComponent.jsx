import axios from 'axios'
import React, { useEffect } from 'react'
import {useState} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'

function AddScreenComponent() {

    const navigate=useNavigate();

    // const {theatreId} = useParams();




// const[screenId,setSId]=useState("")

const [screen,setScreen] = useState ({
    screenName:"",
    rows :"",
    columns :""
});

const handleChange = (event)=>{
    setScreen({ 
        ...screen,
        [event.target.name] : event.target.value,
    });
}






const {theatreId} = useParams();

const postData=()=>{
    console.log(theatreId,screen)
    axios.post(`http://localhost:8081/screens/add`, screen , { params: { theatreId }})
    .then(res=>{console.log(res.data)})
    .catch(err=>console.log("screen not added"))
    navigate("/listscreens");

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




        <h2 className="text-center">Screens List</h2>
        
                 {/* <label>Screen Id</label>
                <input type="text" name="sid" onChange={(s)=>setSId(s.target.value)}/><br/> */}
                <label>Screen Name</label>
                <input type="text" name="screenName" onChange={(event)=>handleChange(event)}/><br/>
                <label>Screen Rows</label>
                <input type="text" name="rows" onChange={(event)=>handleChange(event)} /><br/>
                <label>Screen Columns</label>
                <input type="text" name="columns" onChange={(event)=>handleChange(event)}/><br/>
                <button type="submit" onClick={postData}>Submit</button>
        
    </div>

  )
}

export default AddScreenComponent











// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// // import MovieService from '../services/MovieService';

// class AddScreenComponent extends Component {
//     constructor(props) {
//         super(props)
//         console.log("69",props.params)
//         this.state = {
//             // screenId:"",
//             screenName:"",
//             screenRows:"",
//             screenColumns:""
    
// };


// this.handleChange = this.handleChange.bind(this);
// this.handleSubmit = this.handleSubmit.bind(this);

// }

// // const {movieId} = useParams();

//         handleChange(event){
//             this.setState({
//                 [event.target.name] : event.target.value,
//             });
//         }



//         handleSubmit(event){
//             event.preventDefault();
//             let screen = {

//                 screenName: this.state.screenName,
//                 screenRows: this.state.screenRows,
//                 screenColumns: this.state.screenColumns
//             };
    
//             console.log(' screen=> '+ JSON.stringify(screen));
    
//             axios.post("http://localhost:8081/screens/add, { params: { theatreId : theatreId } }").then(res=> {
//                 console.log(res.data)
//                 alert("succussfully added")
//             })
//             .catch((er)=>alert("Screen cannot be added"));
    
//         }
       
        
// render() 
// {
//     console.log("116",this.props);   
    
//     return (
//             <>

//             {/* Header */}
//             <header>
//         <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        


//         <Link to={'/'} className='navbar-brand'>Moving Ticket Booking Application</Link>


//         {/* <Link to={'/listMovies'}><button className="btn btn-primary mx-2">List Movie</button></Link> */}
//         {/* <Link to={'/login'}><button className="btn btn-primary mx-2">LOGIN</button></Link> */}
//         {/* <Link to={'/register'}><button className="btn btn-primary mx-2">SIGNUP</button></Link> */}

        
//         <Link to={'/adminloggedin'}><button className="btn btn-primary mx-2">Dashboard</button></Link>
//         <Link to={'/listMovies'}><button className="btn btn-primary mx-2"> Movie</button></Link>
//         <Link to={'/listtheatres'}><button className="btn btn-primary mx-2">Theatre</button></Link>
//         <Link to={'/listscreens'}><button className="btn btn-primary mx-2">Screen</button></Link>
//         <Link to={'/customerinfo'}><button className="btn btn-primary mx-2">Customer</button></Link>
        
        
//         <Link to={'/login'}><button className="btn btn-danger mx-2">Logout</button></Link>
        


        
//         </nav>

//         </header>


//             <div>

//             <div className='container'>
//                     <div className='card col-md-6 offset-md-3 offset-md-3'>
//                         <h3 className='text-center'>Add Screen</h3>



//                 {/* <h1>Add Screen</h1> */}
//                 <form name="myForm" onSubmit={this.handleSubmit} >
//                          <label>Screen Name</label>
//                         <input type="text" name="screenName" value={this.state.screenName} onChange={this.handleChange}/><br/>
//                         <label>Screen Rows</label>
//                         <input type="text" name="screenRows" value={this.state.screenRows} onChange={this.handleChange} /><br/>
//                         <label>Screen Columns</label>
//                         <input type="text" name="screenColumns" value={this.state.screenColumns} onChange={this.handleChange}/><br/>
//                         <button type="submit">Submit</button>
//                 </form>
//             </div>
//             </div>
//             </div>
//             </>
        
//           )
//         }
//     }
        
// export default AddScreenComponent;







