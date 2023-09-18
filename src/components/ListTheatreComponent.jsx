import React, { Component } from 'react';
import TheatreService from '../services/TheatreService';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ListTheatreComponent extends Component {
     constructor(props) {
            super(props)

            this.state={
                      theatres:[]
            }
            this.addTheatre = this.addTheatre.bind(this);
            this.handleDeleteTheatre=this.handleDeleteTheatre.bind(this);
            // this.removeBtAttr=this.removeBtAttr.bind(this);
    
    }
    componentDidMount(){
        TheatreService.getTheatres().then((res)=> {
          this.setState({ theatres:res.data});
        }); 
    }
    addTheatre(){
        this.props.history.push('/addtheatre');
    }

    removeByAttr ( attr, value){
        var i = this.state.length;
        while(i--){
           if( this.state[i] 
               && this.state[i].hasOwnProperty(attr) 
               && (arguments.length > 2 && this.state[i][attr] === value ) ){ 
    
                this.state.splice(i,1);
    
           }
        }
        return this.state;
    }


    async handleDeleteTheatre(event,theatreId){
        await axios.delete(`http://localhost:8081/theatre/delete/${theatreId}`).then(res=> {
        console.log(theatreId,"delete");    
        // this.removeByAttr("theatreId",movieId);
        alert("Successfully Theatre Deleted");
        })
        .catch((er)=>alert("Theatre cannot be deleted"));
        await axios.get(`http://localhost:8081/theatre/all`).then(res=> {
            console.log("58",res);
            // this.removeByAttr("theatreId",movieId);
            // alert("Successfully Theatre Deleted");
            this.setState ({
                theatre: res.data
            })

            })
            .catch((er)=>alert("Data cannot be fetched"));
        

       

    }





 render() {
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




                <Link to={'/addtheatre'}><button className="btn btn-primary">Add Theatre</button></Link>
                <h2 className="text-center">Theatre List</h2>
                <div className="row">


                </div>
                <div className="container">
                    <table className ="table table-striped table-bordered" >

                        <thead>
                            <tr>
                                
                                <th>Theatre Name</th>
                                <th>Theatre City</th>
                                <th>Manager Name</th>
                                <th>Manager Contact</th>
                                <th>Actions </th>
                            </tr>
                                 
                        
                        </thead>
                        <tbody>
                            {
                                this.state.theatres.map(
                                    theatre=>
                                    <tr key={theatre.theatreId} >
                                        <td> { theatre.theatreName}</td>
                                        <td> { theatre.theatreCity}</td>
                                        <td> { theatre.managerName}</td>
                                        <td> { theatre.managerContact}</td>

                                        <td>
                                            {/* <Link to={'/updatetheatres/$(theatre.theatreId)'}><button className="btn btn-info mx-2">Update</button></Link> */}
                                            <Link to={`/addscreen/${theatre.theatreId}`} ><button className="btn btn-primary">Add Screen</button></Link>
                                            <button  onClick ={(event)=>this.handleDeleteTheatre(event,theatre.theatreId)} className="btn btn-danger">Delete</button>
                                        </td> 
                                        

                                    </tr>
                                )
                            }

                        </tbody>
 

                    </table>



                </div>


            </div>
        );
    }
}

export default ListTheatreComponent;






