import React from 'react'
import "./HomeLower.css"
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import HomeCard from '../HomeCard/HomeCard';
import HomeFooter from '../HomeFooter/HomeFooter';
import { Link } from 'react-router-dom';
import { Slide } from "react-awesome-reveal";
import { useSelector } from 'react-redux';

export default function HomeLower() {


  const auth = useSelector((state)=> state.user)
  
  return (
    <>
    <div className='lower-div'>
       
        <div className='title'>
            <div>
              <Slide>
                SEMINAR HALL BOOKING
              </Slide>
            </div>

        </div>



        <div className='desc' style={{textTransform:'capitalize'}}>
            <div>
            Our Seminar Hall Booking System is designed to streamline the entire process of reserving and managing seminar halls online. It provides a convenient and centralized platform for both event organizers and venue administrators, ensuring a seamless experience for all users involved.
               
            </div>

        </div>

        <br />
        <br />

         
        <Grid container spacing={2} justifyContent={'center'} >
         
        <Grid item justifyContent={'center'} alignItems={'center'}>
                <Button size='large' variant="contained" className='btn' disableElevation>
                {
                (auth.status === "Authenticated" && auth.user === "Department")?(
                  <Link to="/department/booking">BOOK NOW</Link>
                  ):(
                    <Link to="/department_login">BOOK NOW</Link>
                    )
              }
            </Button>
        </Grid>
      </Grid>

      <br />
        <br />

        <Slide>
        <HomeCard/>
        </Slide>

        <br/>
        <br/>

        <HomeFooter/>


        





    </div>
    </> 
  )
}
