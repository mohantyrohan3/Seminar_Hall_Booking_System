import React from 'react'
import "./DepartmentHistory.css"
import Appbar from "../AppBar/AppBar"
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


 






export default function DepartmentHistory() {
  return (
    <>

        <div className='department-history-body'>
            
            <Appbar/>


            <div className='department-history-title'>
                YOUR BOOKINGS
            </div>


            <Grid container spacing={2} justifyContent={'center'}>

                <Grid item xs={11} sm={7} md={5} lg={6} xl={6}>
                <Card sx={{}} className='department-history-card'>
                            
                                <Typography gutterBottom variant="h5" component="div" className='department-history-card-title'>
                                    HALL NAME
                                </Typography>
                                
                                <Grid container spacing={2} justifyContent={'center'}>

                                    <Grid item xs={6} sm={7} md={7} lg={8} xl={8} className='department-history-event-name'>
                                        EVENT NAME
                                    </Grid>

                                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                    <Button className='btn-admin-booking-request-reject' fullWidth size="medium">CANCEL</Button>
                                    </Grid>

                                </Grid>

                            </Card>
                </Grid>
            </Grid>

            







        </div>



    </>
  )
}
