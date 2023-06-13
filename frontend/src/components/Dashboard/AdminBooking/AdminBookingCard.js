import React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import "./AdminBooking.css"
import {changeBookingRequestApi} from "../../../api/changebookingrequestapi";


export default function AdminBookingCard(props) {



    const id = props.data._id;
    

    const acceptRequest = async ()=> {

        try{
            const data ={
                decision:"Yes",
                id:id,
                name:props.data.hall,
                department:props.data.department.department,
                event:props.data.event
            }
            const response = await changeBookingRequestApi(data)
            console.log(response);
            props.getrequest()
        }

        catch(err){
            console.log(err)
        }
    }





    const cancelRequest = async ()=> {

        try{
            const data ={
                decision:"No",
                id:id
            }
            const response = await changeBookingRequestApi(data)
            console.log(response);
            props.getrequest()
        }

        catch(err){
            console.log(err)
        }
    }







  return (
   <>
   <Grid item xs={10} sm={8} md={8} lg={8} xl={8} style={{marginBottom:'0.5rem'}}>
        <div className='request-div-admin'>

         <h2 className='admin-booking-request-title'>{props.data.hall}</h2>

         <div className='admin-booking-request-desc-div'>
         <span className='admin-booking-request-desc'>{props.data.department.department}</span>
         <span className='admin-booking-request-desc'>{props.data.event}</span>
         </div>

         <Grid container spacing={3} justifyContent={'center'}>
 

             <Grid item xs={10} sm={8} md={7} lg={5} xl={3} alignItems={'end'}>

             <Button size="small" type='submit' className='btn-admin-booking-request-accept' onClick={acceptRequest} fullWidth>ACCEPT</Button>
             </Grid>


             <Grid item xs={10} sm={8} md={7} lg={5} xl={3}>
             <Button size="small" type='submit' className='btn-admin-booking-request-reject' onClick={cancelRequest} fullWidth>REJECT</Button>
             </Grid>



             
         </Grid>



         </div> 
     </Grid>
   </>
  )
}
