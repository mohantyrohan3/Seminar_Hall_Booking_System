import React from 'react'
import Appbar from '../AppBar/AppBar'
import "./AdminBooking.css"
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


const number = [1,2,3,4,5];

export default function AdminBooking() {
    const list = number.map(()=>{
        return(
            <Grid item xs={10} sm={8} md={8} lg={8} xl={8} style={{marginBottom:'0.5rem'}}>
            <div className='request-div-admin'>

             <h2 className='admin-booking-request-title'>HALL NAME</h2>

             <div className='admin-booking-request-desc-div'>
             <span className='admin-booking-request-desc'>DEPARTMENT</span>
             <span className='admin-booking-request-desc'>EVENT NAME</span>
             </div>

             <Grid container spacing={3} justifyContent={'center'}>
     

                 <Grid item xs={10} sm={8} md={7} lg={5} xl={3} alignItems={'end'}>

                 <Button size="small" type='submit' className='btn-admin-booking-request-accept' fullWidth>ACCEPT</Button>
                 </Grid>


                 <Grid item xs={10} sm={8} md={7} lg={5} xl={3}>
                 <Button size="small" type='submit' className='btn-admin-booking-request-reject' fullWidth>REJECT</Button>
                 </Grid>



                 
             </Grid>



             </div> 
         </Grid>
        )
    })

    



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



            <Grid container spacing={6} justifyContent={'center'}> 
                {list}
            
            </Grid>






        </div>



    </>
  )
}
