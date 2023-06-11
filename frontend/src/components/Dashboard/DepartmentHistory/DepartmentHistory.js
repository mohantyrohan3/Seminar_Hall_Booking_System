import React from 'react'
import "./DepartmentHistory.css"
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import DepartmentAppBar from '../DepartmentAppBar/DepartmentAppBar';


const pages = [1,2,3,4,5,6]; 






export default function DepartmentHistory() {


    const list = pages.map(()=>{
        return(
            <Grid sx={{marginBottom:'1.5rem'}} item xs={11} sm={7} md={8} lg={8} xl={8}>
                <Card sx={{}} className='department-history-card'>
                            
                                <Typography gutterBottom variant="h5" component="div" className='department-history-card-title'>
                                    HALL NAME
                                </Typography>
                                
                                <Grid container spacing={2} justifyContent={'center'}>

                                    <Grid item xs={6} sm={7} md={7} lg={8} xl={8} className='department-history-event-name'>
                                        EVENT NAME
                                    </Grid>

                                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                    <Button className='btn-department-history-reject' fullWidth size="medium">CANCEL</Button>
                                    </Grid>

                                </Grid>

                            </Card>
                    </Grid>
        )
    })




  return (
    <>

        <div className='department-history-body'>
            
            <DepartmentAppBar/>


            <div className='department-history-title'>
                YOUR BOOKINGS
            </div>


                <Container>
            <Grid container spacing={2} justifyContent={'center'}>
                {list}   
            </Grid>
                </Container>

            







        </div>



    </>
  )
}
