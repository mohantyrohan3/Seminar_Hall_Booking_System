import './App.css';
import React, { useEffect, useState } from "react";  
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './routes/Home';
import AdminLoginRoute from './routes/AdminLoginRoute';
import DepartmentLoginRoute from './routes/DepartmentLoginRoute';
import DepartmentRegisterRoute from './routes/DepartmentRegisterRoute';
import AdminHallRoute from './routes/AdminHallRoute';
import AdminBookingRoute from './routes/AdminBookingRoute';
import AdminDepartmentRoute from './routes/AdminDepartmentRoute';
import AdminDepartmentRequestRoute from './routes/AdminDepartmentRequestRoute';
import DepartmentBookingRoute from './routes/DepartmentBookingRoute';
import DepartmentHistoryRoute from './routes/DepartmentHistoryRoute';
import axios from 'axios';


function App() {

  const [auth, setauth] = useState(null);

  
  useEffect(() => {
    axios.get('https://seminar.post.rohankm.online/details', {
          })
          .then(function (response) {
            if(response.data.status === 'Authenticated'){
              setauth(true);
              console.log(response.data)
            }
            else{
              setauth(false)
              console.log(response.data)
            }
          })
          .catch(function (error) {
            console.log(error);
          })
  },);





  return (
    <>

    <Router>
        <Routes>


        {
          (auth)?
          <>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/admin/hall" element={<AdminHallRoute/>} />
            <Route exact path="/admin/booking" element={<AdminBookingRoute/>} />
            <Route exact path="/admin/department" element={<AdminDepartmentRoute/>} />
            <Route exact path="/admin/department/request" element={<AdminDepartmentRequestRoute/>} />
            {/* <Route element={NotFound} /> */}
            </>
          :
            <>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/admin_login" element={<AdminLoginRoute/>} />
            <Route exact path="/department_login" element={<DepartmentLoginRoute/>} />
            <Route exact path="/department_register" element={<DepartmentRegisterRoute/>} />
            
  
  
            
            <Route exact path="/department/booking" element={<DepartmentBookingRoute/>} />
            <Route exact path="/department/booking/history" element={<DepartmentHistoryRoute/>} />
            </>
        }



        </Routes>

      </Router>
   

    {/* <HomeUpper/>
    <HomeLower/> */}

    {/* <AdminLogin/> */}
    {/* <DepartmentLogin/> */}
    {/* <DepartmentRegister/> */}
    {/* <AppBar/> */}
    {/* <AdminHall/> */}
    {/* <AdminBooking/> */}
    {/* <AdminDepartment/> */}
    {/* <AdminDepartmentRequest/> */}
    {/* <DepartmentBooking/> */}
    {/* <DepartmentHistory/> */}


    {/* <Loading/> */}
    
    </>
  );
}

export default App;
