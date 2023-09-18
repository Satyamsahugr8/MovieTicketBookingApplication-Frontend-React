import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
// import HeaderComponent from './components/HeaderComponent';
import ListMovieComponent from './components/ListMovieComponent';
import AddMovieComponent from './components/AddMovieComponent';
import HomeComponent from './components/HomeComponent';
import UpdateMovieComponent from './components/UpdateMovieComponent';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import AdminComponent from './components/AdminComponent';
import CustomerComponent from './components/CustomerComponent';
import DashboardAdminComponent from './components/DashboardAdminComponent';
import DashboardcustoComponent from './components/DashboardCustoComponent';
import ListTheatreComponent from './components/ListTheatreComponent';
import CreateTheatreComponent from './components/CreateTheatreComponent';
import UpdateTheatreComponent from './components/UpdateTheatreComponent';
import AddCustomerComponent from './components/Customer/AddCustomerComponent';
import CustomerInfoComponent from './components/Customer/CustomerInfoComponent';
import UpdateCustomerComponent from './components/Customer/UpdateCustomerComponent';
import BookeComponent from './components/Booke/BookeComponent';
import ListScreenComponent from './components/Screen/ListScreenComponent';
import UpdateScreenComponent from './components/Screen/UpdateScreenComponent';
import AddScreenComponent from './components/Screen/AddScreenComponent';
import HomeDashComponent from './components/HomeDashComponent';




function App() {



  // const navigateToContacts = () => {

  //   const navigate = useNavigate();

  // //   // 👇️ navigate to /contacts
  // //   navigate('/contacts');
  // // };

  // const navigateHome = () => {
  //   // 👇️ navigate to /
  //   navigate('/');
  // };


  
    // <div>
    //   <Router>
        
    //     <div className='container'>
          
    //       <HeaderComponent />
          
    //       {/* <div className="container"> */}

    //         <Routes>

              
    //            <Route path="/" exact element={ <HomeComponent /> } />
    //            {/* <Route path="/listmovies" element={ <ListMovieComponent />} />
    //            <Route path="/addmovie" element={ <AddMovieComponent />} /> */}
                        
             
    //          </Routes>
            
    //       {/* </div> */}

    //       <FooterComponent />

    //     </div>
    //   </Router>
    // </div>

return (

    <div>
      {/* <div className='container'> */}
      <Router>
      {/* <HeaderComponent /> */}

      <Routes>
      <Route path="/" exact element={ <HomeComponent /> } />
      <Route path="/homedash" exact element={ <HomeDashComponent /> } /> 
      <Route path='/login' element={ <LoginComponent/>} />
      <Route path='/register' element={ <RegisterComponent/>} />
      <Route path="/addmovie" element={ <AddMovieComponent />} />
      <Route path="/listmovies" element={ <ListMovieComponent />} />
      <Route path='/updatemovies/:movieId' element={ <UpdateMovieComponent/>} />


      {/* theatre part */}
      <Route path="/listtheatres" element={ <ListTheatreComponent/>} />
      <Route path="/addtheatre" element={ <CreateTheatreComponent/>} />
      <Route path='/updatetheatres/:theatreId' element={<UpdateTheatreComponent/>}/>


      {/* book */}
      <Route path='/booke' element={<BookeComponent/>}/>

      

      {/* Admin */}
      <Route path="/" exact element= { <HomeComponent /> } />
      <Route path='/adminloggedin' element={ <AdminComponent/>} />
      <Route path='/admindashboard' element={ <DashboardAdminComponent/>} />



      {/* Customer */}
      <Route path='/customerloggedin' element={ <CustomerComponent/>} />
      <Route path='/customerdashboard' element={ <DashboardcustoComponent />} />

      {/* customer part */}
      <Route path="/customerinfo" element={ <CustomerInfoComponent/>} />
      <Route path="/addcustomer" element={ <AddCustomerComponent/>} />
      <Route path="/updatecustomer" element={ <UpdateCustomerComponent/>} />


      {/* screen */}
      <Route path="/listscreens" element={ <ListScreenComponent/>} />
      <Route path="/addscreen/:theatreId" element={ <AddScreenComponent/>} />
      <Route path="/updatescreen" element={ <UpdateScreenComponent/>} />
      
      


      </Routes>
      <FooterComponent />


      </Router>
      </div>
    // </div>

  );
}

export default App;
