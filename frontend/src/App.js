import './App.css';
import React from "react";  
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import AdminDepartment from './components/Dashboard/AdminDepartment/AdminDepartment';
import AdminDepartmentRequest from './components/Dashboard/AdminDepartmentRequest/AdminDepartmentRequest';
import DepartmentBooking from './components/Dashboard/DepartmentBooking/DepartmentBooking';
import DepartmentHistory from './components/Dashboard/DepartmentHistory/DepartmentHistory';
import AdminBooking from './components/Dashboard/AdminBooking/AdminBooking';
import AdminHall from './components/Dashboard/AdminHall/AdminHall';
import AppBar from './components/Dashboard/AppBar/AppBar';
import AdminLogin from './components/AdminLogin/AdminLogin';
import HomeLower from './components/HomeLower/HomeLower';
import HomeUpper from './components/HomeUpper/HomeUpper';
import DepartmentLogin from './components/DepartmentLogin/DepartmentLogin';
import DepartmentRegister from './components/DepartmentRegister/DepartmentRegister';
import Loading from './components/Loading/Loading';
import Home from './routes/Home';
import AdminLoginRoute from './routes/AdminLoginRoute';
import DepartmentLoginRoute from './routes/DepartmentLoginRoute';
import DepartmentRegisterRoute from './routes/DepartmentRegisterRoute';
import AdminHallRoute from './routes/AdminHallRoute';
import AdminBookingRoute from './routes/AdminBookingRoute';

function App() {
  return (
    <>

    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/admin_login" element={<AdminLoginRoute/>} />
          <Route exact path="/department_login" element={<DepartmentLoginRoute/>} />
          <Route exact path="/department_register" element={<DepartmentRegisterRoute/>} />
          <Route exact path="/admin/hall" element={<AdminHallRoute/>} />
          <Route exact path="/admin/booking" element={<AdminBookingRoute/>} />
          

          {/* <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/schemes" element={<Schemes />} />
          <Route exact path="/helpdesk" element={<Helpdesk />} />
          <Route exact path="/predict" element={<Predict />} />
          <Route exact path="/predict/crop" element={<PredictCrop />} />
          <Route exact path="/predict/loan" element={<Predictloan />} />
          <Route exact path="/marketplace" element={<Homepage/>} />
          <Route exact path="/review/cart" element={<CartReview/>} />
          <Route exact path="/food/details/:keys" element={<CropDetails/>} /> */}
         
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
