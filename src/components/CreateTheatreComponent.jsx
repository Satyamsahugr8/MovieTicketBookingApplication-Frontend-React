import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TheatreService from '../services/TheatreService';

class CreateTheatreComponent extends Component {
    constructor(props) {
        super(props)

        this.state={
                theatreName:"", 
                theatreCity:"",
                managerName:"",
                managerContact:""
        };

        // this.changeTheatreNameHandler= this.changeTheatreNameHandler.bind(this);
        // this.changeTheatreCityHandler= this.changeTheatreCityHandler.bind(this);
        // this.saveTheatre=this.saveTheatre.bind(this);

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

   }

   handleChange =(event)=>{
    this.setState({
        [event.target.name] : event.target.value,
    });
}


handleSubmit=(event)=>{
    event.preventDefault();
    let theatre = {
        theatreName: this.state.theatreName,
        theatreCity: this.state.theatreCity,
        managerName: this.state.managerName,
        managerContact: this.state.managerContact,
       
    };
    console.log(' theatre => '+ JSON.stringify(theatre));

        TheatreService.addtheatre(theatre).then(res=> {
            console.log(res.data)
            alert("succussfully added")
        })
        .catch((er)=>alert("theatre cannot be added"));
}

//    saveTheatre=(th) =>{
//       th.preventDefault();
//       let theatre={theatreName:this.state.theatreName,theatreCity:this.state.theatreCity,managerName:this.state.managerName,managerContact:this.state.managerContact};
//       console.log('theatre=> '+JSON.stringify(theatre));
//    }
   
//    changeTheatreNameHandler=(event)=>{
//         this.setState({theatreName:event.target.value});

        

//    }
//    changeTheatreCityHandler=(event)=>{
//     this.setState({theatreCity:event.target.value});
//    }
//    changeManagerNameHandler=(event)=>{
//     this.setState({managerName:event.target.value});
//    }
//    changeManagerContactHandler=(event)=>{
//     this.setState({managerContact:event.target.value});
//    }


    render() {
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
                    
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Theatre</h3>

                            <div className="card-body">
                                <form  onSubmit={this.handleSubmit}>

                                    <div className="form-group">
                                        <label>Theatre Name:</label>
                                        <input placeholder="Theatre Name" type='text' name="theatreName" className='form-control' 
                                        value={this.state.theatreName} onChange={(e)=>this.handleChange(e)} required/>

                                    </div>

                                    <div className="form-group">
                                        <label>Theatre City:</label>
                                        <input placeholder="Theatre City" type='text' name="theatreCity" className='form-control' 
                                        value={this.state.theatreCity} onChange={(e)=>this.handleChange(e)} required/>

                                    </div>

                                    <div className="form-group">
                                        <label>Manager Name:</label>
                                        <input placeholder="Manager Name" type='text' name="managerName" className="form-control" 
                                        value={this.state.managerName} onChange={(e)=>this.handleChange(e)} required/>

                                    </div>

                                    <div className="form-group">
                                        <label>Manager Contact:</label>
                                        <input placeholder="Manager Contact"  type='text' name="managerContact" className="form-control" 
                                        value={this.state.managerContact} onChange={(e)=>this.handleChange(e)} required/>

                                    </div>

                                    <button type='submit' className='btn btn-success' >Save</button>

                                    <Link to={'/listTheatres'}><button className="btn btn-danger" style={{marginLeft: "10px"}}> cancel </button> </Link>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            
        );
    }
}

export default CreateTheatreComponent;