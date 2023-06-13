import React from 'react'
import "./DepartmentBooking.css"
import Grid from '@mui/material/Grid';
import HallCard from '../AdminHall/HallCard';
import { Container } from '@mui/material';
import DepartmentAppBar from '../DepartmentAppBar/DepartmentAppBar';



const pages = [1,2,3,4,5,6];

export default function DepartmentBooking() {

    const list = pages.map(()=>{
        return(
          <Grid item xs={11} sm={7} md={5} lg={4} xl={4}>
              {/* <HallCard/> */}
        </Grid>
        )
      })



  return (
    <>
        <div className='department-booking-body'>

            <DepartmentAppBar/>

            <div className='department-booking-title'>
                HALLS
            </div>

            <Container sx={{marginTop:'1rem', marginBottom:'1rem'}}>
                <Grid container spacing={10} justifyContent={'center'}>
                    {list}
                </Grid>
            </Container>




        </div>


    
    
    </>
  )
}
