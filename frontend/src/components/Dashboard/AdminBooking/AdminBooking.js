import React from 'react'
import Appbar from '../AppBar/AppBar'
import "./AdminBooking.css"
import Grid from '@mui/material/Grid';


export default function AdminBooking() {
  return (
    <>

        <div className='admin-booking-body'>
            <Appbar/>
            

            <Grid container justifyContent={'center'} justifyItems={'center'}>

                <Grid item >
                    <h2 className='admin-booking-title'>BOOKING REQUESTS</h2>
                </Grid>
            </Grid>








        </div>



    </>
  )
}
