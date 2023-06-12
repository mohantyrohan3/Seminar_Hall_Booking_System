import React, { useEffect, useState } from 'react'
import Appbar from '../AppBar/AppBar'
import "./AdminBooking.css"
import Grid from '@mui/material/Grid';
import AdminBookingCard from './AdminBookingCard';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';


// const list = number.map(()=>{
//     return(
//         <AdminBookingCard/>
//     )
// })

export default function AdminBooking() {

    const [list, setlist] = useState([]);
    const [open, setOpen] = useState(true);

    
    const get_booking_requests = async ()=>{
        setOpen(true)
        try{
          const response = await axios.get('https://seminar.rohankm.online/api/booking/show_booking_requests',{
            withCredentials:true
          })
          let temp = response.data.booking_requests.map((data)=>{
            return(
             <AdminBookingCard data = {data} getrequest={get_booking_requests}/>
            )
          })
          setlist(temp)
          setOpen(false)
        }
    
        catch(err){
          console.log(err)
        }
    
    
      }





    useEffect(() => {
        get_booking_requests();
      }, []);


   

    



  return (
    <>  

        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
        
        <div className='admin-booking-body'>
            <Appbar/>
            

            <Grid container justifyContent={'center'}>
                
                <Grid item >
                    <div className='admin-booking-title-div'>
                    <h2 className='admin-booking-title'>BOOKING REQUESTS</h2>
                    </div>
                </Grid>
                
                </Grid>



            <Grid container spacing={6} justifyContent={'center'}> 
                {list}
            
            </Grid>






        </div>



    </>
  )
}
