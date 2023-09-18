import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class ListScreenComponent extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            screens: []
        }

        this.addScreen = this.addScreen.bind(this);
        // this.handleDeleteScreen = this.handleDeleteScreen.bind(this);
        // this.removeByAttr = this.removeByAttr.bind(this);
    }
    
    componentDidMount(){
        // console.log("21");
        axios.get("http://localhost:8081/screens/findall").then(( res )=> {
            console.log(res);
            this.setState({ screens : res.data })
        })
    }



    addScreen(){
        this.props.history.push('/addscreen');
    }

    // rudresh(){
    //     // console.log(movieId);
    //     // alert('check');
    // }

    //  removeByAttr ( attr, value){
    //     var i = this.state.length;
    //     while(i--){
    //        if( this.state[i] 
    //            && this.state[i].hasOwnProperty(attr) 
    //            && (arguments.length > 2 && this.state[i][attr] === value ) ){ 
    
    //             this.state.splice(i,1);
    
    //        }
    //     }
    //     return this.state;
    // }


    //  async handleDeleteScreen(event,screenId){
    //     await axios.delete(`http://localhost:8081/screens/delete/${screenId}`).then(res=> {
    //     console.log(screenId,"delete");    
    //     // this.removeByAttr("screenId",screenId);
    //     alert("Successfully Movie Deleted");
    //     })
    //     .catch((er)=>alert("Screens cannot be deleted"));
    //     await axios.get(`http://localhost:8081/movies/findall`).then(res=> {
    //         console.log("58",res);
    //         // this.removeByAttr("screenId",screenId);
    //         // alert("Successfully Screen Deleted");
    //         this.setState ({
    //             screens: res.data
    //         })

    //         })
    //         .catch((er)=>alert("Data cannot be fetched"));
        

       

    // }


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










            
                <h2 className='text-center'>Screens List</h2>
                <div className='row'>
            </div>
                <div className='container'>
                    <table className='table table-striped table-bordered'>

                        <thead>
                            <tr>
                                <th> Screen Name</th>
                                <th>Screen Rows</th>
                                <th>Screen Columns</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.screens.map(
                                    screen =>
                                    <tr key ={screen.screenId}>
                                        <td>{screen.screenName}</td>
                                        <td>{screen.rows}</td>
                                        <td>{screen.columns}</td>
                                        <td>
                                            {/* <Link to={`/updatescreens/${screen.screenId}`}><button className="btn btn-info mx-2">Update</button></Link> */}
                                            {/* <button onClick={(event)=>this.handleDeleteScreen(event,screen.screenId)} className="btn btn-danger">Delete</button> */}
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

export default ListScreenComponent;