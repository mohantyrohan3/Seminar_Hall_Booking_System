import React from 'react'
import Appbar from '../AppBar/AppBar'
import "./AdminBooking.css"
import Grid from '@mui/material/Grid';


export default function AdminBooking() {
  return (
    <>

        <div className='admin-booking-body'>
            <Appbar/>
            

            <Grid container justifyContent={'center'}>
                <Grid item >
                    <div className='admin-booking-title-div'>
                    <h2 className='admin-booking-title'>BOOKING REQUESTS</h2>
                    </div>
                </Grid>
            </Grid>



            <Grid container spacing={5} justifyContent={'center'}> 
                <Grid item xs={10}>
                   <div className='request-div-admin'>
                    
                    </div> 
                </Grid>

                <Grid item xs={10}>
                   <div className='request-div-admin'>
                    
                    </div> 
                </Grid>

                <Grid item xs={10}>
                   <div className='request-div-admin'>
                    
                    </div> 
                </Grid>
            </Grid>






        </div>



    </>
  )
}
